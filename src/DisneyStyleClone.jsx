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
    { title: "Brave", img: "https://image.tmdb.org/t/p/w500/kzby9PZzqRlgF42h02rLrN1VfM2.jpg" },
    { title: "Big Hero 6", img: "https://image.tmdb.org/t/p/w500/9gLu47Zw5ertuFTZaxXOvNfy78T.jpg" },
    { title: "Inside Out", img: "https://image.tmdb.org/t/p/w500/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg" },
    { title: "Aladdin", img: "https://image.tmdb.org/t/p/w500/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg" },
    { title: "Beauty and the Beast", img: "https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg" },
    { title: "Mulan", img: "https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" },
    { title: "Frozen", img: "https://image.tmdb.org/t/p/w500/mbPo3P3K2nNLbzFbdXKkdZzl0qf.jpg" },
    { title: "Tangled", img: "https://image.tmdb.org/t/p/w500/ym7Kst6a4uodryxqbGOxmewF235.jpg" },
    { title: "Cars", img: "https://image.tmdb.org/t/p/w500/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg" },
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
