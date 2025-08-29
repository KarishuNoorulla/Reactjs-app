import React, { useState, useEffect } from "react";

export default function DisneyStyleClone() {
  const navItems = ["Home", "Movies", "Series", "Originals", "Kids", "My List"];

  const movies = [
    { title: "Frozen II", img: "https://image.tmdb.org/t/p/w500/qdfARIhgpgZOBh3vfNhWS4hmSo3.jpg" },
    { title: "Moana", img: "data:image/jpeg;base64,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" },
    { title: "The Lion King", img: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg" },
    { title: "Toy Story 4", img: "https://image.tmdb.org/t/p/w500/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg" },
    { title: "Coco", img: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg" },
    { title: "Encanto", img: "https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg" },
    { title: "Ratatouille", img: "https://image.tmdb.org/t/p/w500/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg" },
    { title: "Zootopia", img: "https://image.tmdb.org/t/p/w500/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg" },
    { title: "Finding Nemo", img: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg" },
    { title: "Finding Dory", img: "https://image.tmdb.org/t/p/w500/3UVe8NL1E2ZdUZ9EDlKGJY5UzE.jpg" },
    { title: "Brave", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB58YveWqOhOYQSO8YsoTyjYWJctcBOya0cw&s" },
    { title: "Big Hero 6", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVQRkkxJcit-QR2tVeAyijs3qGqLQMr7vXmw&s" },
    { title: "Inside Out", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS_ktGJTfn2ICdcDk87jTLaLXLgeL18UNXtw&s" },
    { title: "Aladdin", img: "https://image.tmdb.org/t/p/w500/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg" },
    { title: "Beauty and the Beast", img: "https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg" },
    { title: "Mulan", img: "https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" },
    { title: "Frozen", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-KzRYn7KSJKWUn2pid58kXF3TTAyEA2S4A&s" },
    { title: "Tangled", img: "https://image.tmdb.org/t/p/w500/ym7Kst6a4uodryxqbGOxmewF235.jpg" },
    { title: "Cars", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQnyET9mmfOn3sOO1xyMIOAP50EoStCxCvQ&s" },
    { title: "The Incredibles", img: "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg" },
  ];

  // 🎨 Colors to rotate
  const colors = ["#FFC0CB", "#FFB6C1", "#FF69B4", "#FFD700", "#87CEFA", "#90EE90", "#FFDEAD"];
  const [bgColor, setBgColor] = useState(colors[0]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % colors.length;
      setBgColor(colors[i]);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, [colors]);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: bgColor,
        color: "black",
        minHeight: "100vh",
        transition: "background-color 1s ease-in-out",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
          backgroundColor: "rgba(255,255,255,0.6)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <h1 style={{ fontSize: "26px", fontWeight: "bold" }}>Disney+</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          {navItems.map((item, i) => (
            <a
              key={i}
              href="#"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "600",
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <header
        style={{
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Welcome to Disney Magic ✨
        </h2>
        <p style={{ fontSize: "18px" }}>
          Stream your favorite Disney, Pixar & Marvel adventures
        </p>
      </header>

      {/* Movie Grid */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "20px",
          padding: "20px 40px",
        }}
      >
        {movies.map((movie, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <img
              src={movie.img}
              alt={movie.title}
              style={{ width: "100%", height: "270px", objectFit: "cover" }}
            />
            <div style={{ padding: "10px" }}>
              <h3 style={{ fontSize: "16px", margin: "0" }}>{movie.title}</h3>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
