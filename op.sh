#!/bin/bash

# Create folder structure
mkdir -p k8s/react-app
mkdir -p k8s/mongodb
mkdir -p k8s/efk
mkdir -p k8s/istio

# -----------------------------
# React App Deployment
# -----------------------------
cat <<EOF > k8s/react-app/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: react-app
  labels:
    app: react-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: react-app
  template:
    metadata:
      labels:
        app: react-app
    spec:
      containers:
      - name: react-app
        image: noorulla007/react-app:latest
        ports:
        - containerPort: 80
EOF

cat <<EOF > k8s/react-app/service.yaml
apiVersion: v1
kind: Service
metadata:
  name: react-app-service
spec:
  type: LoadBalancer
  selector:
    app: react-app
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
EOF

# -----------------------------
# MongoDB StatefulSet
# -----------------------------
cat <<EOF > k8s/mongodb/mongodb-statefulset.yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mongo
spec:
  serviceName: "mongo"
  replicas: 3
  selector:
    matchLabels:
      app: mongo
  template:
    metadata:
      labels:
        app: mongo
    spec:
      containers:
      - name: mongo
        image: mongo:6.0
        ports:
        - containerPort: 27017
        volumeMounts:
        - name: mongo-data
          mountPath: /data/db
  volumeClaimTemplates:
  - metadata:
      name: mongo-data
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 10Gi
EOF

cat <<EOF > k8s/mongodb/mongodb-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: mongo
spec:
  ports:
  - port: 27017
  clusterIP: None
  selector:
    app: mongo
EOF

# -----------------------------
# EFK Stack
# -----------------------------
cat <<EOF > k8s/efk/elasticsearch.yaml
apiVersion: elasticsearch.k8s.elastic.co/v1
kind: Elasticsearch
metadata:
  name: elasticsearch
  namespace: logging
spec:
  version: 8.10.0
  nodeSets:
  - name: default
    count: 1
    config:
      node.store.allow_mmap: false
EOF

cat <<EOF > k8s/efk/kibana.yaml
apiVersion: kibana.k8s.elastic.co/v1
kind: Kibana
metadata:
  name: kibana
  namespace: logging
spec:
  version: 8.10.0
  count: 1
  elasticsearchRef:
    name: elasticsearch
EOF

cat <<EOF > k8s/efk/fluentd.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: fluentd-config
  namespace: logging
data:
  fluent.conf: |
    <source>
      @type tail
      path /var/log/containers/*.log
      pos_file /var/log/fluentd-containers.log.pos
      tag kubernetes.*
      format json
    </source>

    <match kubernetes.**>
      @type elasticsearch
      host elasticsearch.logging.svc.cluster.local
      port 9200
      logstash_format true
      logstash_prefix fluentd
    </match>
EOF

# -----------------------------
# Istio Addons
# -----------------------------
cat <<EOF > k8s/istio/istio-addons.yaml
# Prometheus
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.21/samples/addons/prometheus.yaml

# Kiali
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.21/samples/addons/kiali.yaml

# Jaeger (Distributed tracing)
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.21/samples/addons/jaeger.yaml
EOF

echo "All folders and files created successfully!"

