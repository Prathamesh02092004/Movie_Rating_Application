import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/movie/showMovies")
      .then((res) => setMovies(res.data))
      .catch(console.error);
  }, []);

  return (
    <>
      <style>
        {`
          .movie-card {
            height: 420px;
            background-color: #f4f0ec;
            border: 1px solid #e0d6cc;
          }

          .movie-card img {
            height: 180px;
            object-fit: cover;
          }

          .movie-card .card-body {
            display: flex;
            flex-direction: column;
          }

          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .movie-btn {
            background-color: #885133;
            color: #f0e6d7;
          }

          .movie-btn:hover {
            background-color: #6f4028;
            color: #f0e6d7;
          }
        `}
      </style>

      <div className="container my-1">
        <div className="row g-4">
          {movies.map((movie) => (
            <div className="col-md-4" key={movie._id}>
              <div className="card movie-card">
                <img
                  src={movie.imageUrl}
                  alt={movie.name}
                  className="card-img-top"
                />

                <div className="card-body">
                  <h5 className="card-title">
                    Rating: {movie.rating}/10
                  </h5>

                  <p className="card-text line-clamp-3">
                    {movie.description}
                  </p>

                  <NavLink to={`/show/${movie._id}`} className="btn movie-btn mt-auto">
                    Read More..
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
