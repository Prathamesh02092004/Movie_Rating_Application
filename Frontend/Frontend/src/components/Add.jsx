import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [movie, setMovie] = useState({
    name: "",
    imageUrl: "",
    rating: "",
    cast: "",
    genre: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/movie/add", movie)
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card" style={{backgroundColor:'#f4f0ec'}}>
            <div className="card-body"
            >
              <h4 className="card-title text-center" style={{ color: "#885133" }}>Add Movie</h4>

              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    onChange={(e) =>
                      setMovie({ ...movie, name: e.target.value })
                    }
                  />
                  <label htmlFor="name">Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="imageUrl"
                    onChange={(e) =>
                      setMovie({ ...movie, imageUrl: e.target.value })
                    }
                  />
                  <label htmlFor="imageUrl">Image URL</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="rating"
                    onChange={(e) =>
                      setMovie({ ...movie, rating: e.target.value })
                    }
                  />
                  <label htmlFor="rating">Rating</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="cast"
                    onChange={(e) =>
                      setMovie({ ...movie, cast: e.target.value })
                    }
                  />
                  <label htmlFor="cast">Cast</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="genre"
                    onChange={(e) =>
                      setMovie({ ...movie, genre: e.target.value })
                    }
                  />
                  <label htmlFor="genre">Genre</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    onChange={(e) =>
                      setMovie({ ...movie, description: e.target.value })
                    }
                  />
                  <label htmlFor="description">Description</label>
                </div>

                <button type="submit" className="btn  w-100" style={{ backgroundColor: "#885133" }}>
                  Add
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
