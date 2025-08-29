import React, { useState, useEffect } from "react";

export default function DisneyStyleClone() {
  const navItems = ["Home", "Movies", "Series", "Originals", "Kids", "My List"];

  const movies = [
    { title: "Frozen II", img: "https://image.tmdb.org/t/p/w500/qdfARIhgpgZOBh3vfNhWS4hmSo3.jpg" },
    { title: "Moana", img: "https://image.tmdb.org/t/p/w500/z4x0Bp48ar3Mda8KiPD1vwSY3D8.jpg" },
    { title: "The Lion King", img: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg" },
    { title: "Toy Story 4", img: "https://image.tmdb.org/t/p/w500/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg" },
    { title: "Coco", img: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg" },
    { title: "Encanto", img: "https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg" },
    { title: "Ratatouille", img: "https://image.tmdb.org/t/p/w500/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg" },
    { title: "Zootopia", img: "https://image.tmdb.org/t/p/w500/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg" },
    { title: "Finding Nemo", img: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg" },
    { title: "Finding Dory", img: "https://image.tmdb.org/t/p/w500/3UVe8NL1E2ZdUZ9EDlKGJY5UzE.jpg" },
    { title: "Brave", img: "https://image.tmdb.org/t/p/w500/4XddcRDtnNjYmLRMYpbrhFxsbuq.jpg" },
    { title: "Big Hero 6", img: "https://image.tmdb.org/t/p/w500/9gLu47Zw5ertuFTZaxXOvNfy78T.jpg" },
    { title: "Inside Out", img: "https://image.tmdb.org/t/p/w500/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg" },
    { title: "Aladdin", img: "https://image.tmdb.org/t/p/w500/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg" },
    { title: "Beauty and the Beast", img: "https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg" },
    { title: "Mulan", img: "https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" },
    { title: "Frozen", img: "https://image.tmdb.org/t/p/w500/duV2C8vU1VY0gTnXhT0y6U2QX3P.jpg" },
    { title: "Luca", img: "https://image.tmdb.org/t/p/w500/jTswp6KyDYKtvC52GbHagrZbGvD.jpg" },
    { title: "Turning Red", img: "https://image.tmdb.org/t/p/w500/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg" },
    { title: "Soul", img: "https://image.tmdb.org/t/p/w500/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg" },
  ];

  const [bgColor, setBgColor] = useState("");

  const colors = [
    "linear-gradient(to right, #ff9a9e, #fad0c4)",
    "linear-gradient(to right, #a1c4fd, #c2e9fb)",
    "linear-gradient(to right, #fbc2eb, #a6c1ee)",
    "linear-gradient(to right, #fdcbf1, #e6dee9)",
    "linear-gradient(to right, #84fab0, #8fd3f4)",
    "linear-gradient(to right, #fccb90, #d57eeb)",
    "linear-gradient(to right, #fddb92, #d1fdff)"
  ];

  useEffect(() => {
    // pick a random background at load
    changeBackground();
  }, []);

  const changeBackground = () => {
    const random = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(random);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: bgColor,
        minHeight: "100vh",
        color: "white",
        transition: "background 0.5s ease",
      }}
    >
      {/* Navbar */}
      <nav style={{ display: "flex", padding: "20px", justifyContent: "space-between" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>Disney+</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          {navItems.map((item, i) => (
            <a key={i} href="#" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
              {item}
            </a>
          ))}
        </div>
        <button
          onClick={changeBackground}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: "white",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Change Background
        </button>
      </nav>

      {/* Movies Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {movies.map((movie, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: "12px",
              padding: "10px",
              textAlign: "center",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.3)",
            }}
          >
            <img
              src={movie.img}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3 style={{ marginTop: "10px" }}>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
