import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({
    name: "",
    imageUrl: "",
    rating: "",
    cast: "",
    genre: "",
    description: "",
  });

  
  useEffect(() => {
    axios
      .get(`http://localhost:4000/movie/showMovie/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/movie/edit/${id}`, movie)
      .then(() => navigate(`/show/${id}`))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card" style={{ backgroundColor: "#f4f0ec" }}>
            <div className="card-body">
              <h4 className="card-title text-center" style={{ color: "#885133" }}>
                Edit Movie
              </h4>

              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={movie.name}
                    onChange={(e) => setMovie({ ...movie, name: e.target.value })}
                  />
                  <label htmlFor="name">Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="imageUrl"
                    value={movie.imageUrl}
                    onChange={(e) => setMovie({ ...movie, imageUrl: e.target.value })}
                  />
                  <label htmlFor="imageUrl">Image URL</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="rating"
                    value={movie.rating}
                    onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
                  />
                  <label htmlFor="rating">Rating</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="cast"
                    value={movie.cast}
                    onChange={(e) => setMovie({ ...movie, cast: e.target.value })}
                  />
                  <label htmlFor="cast">Cast</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="genre"
                    value={movie.genre}
                    onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
                  />
                  <label htmlFor="genre">Genre</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={movie.description}
                    onChange={(e) => setMovie({ ...movie, description: e.target.value })}
                  />
                  <label htmlFor="description">Description</label>
                </div>

                <button
                  type="submit"
                  className="btn w-100"
                  style={{ backgroundColor: "#885133", color: "#fff" }}
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
