import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Show = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({
    name: "",
    imageUrl: "",
    rating: "",
    cast: "",
    genre: "",
    description: "",
  });
  const navigate=useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/movie/showMovie/${id}`)
      .then((res) =>{ 
         console.log("Movie data:", res.data);
        setMovie(res.data)})
      .catch(console.error);
  }, [id]);

  const handleDelete = () => {
        axios.delete(`http://localhost:4000/movie/delete/${id}`)
            .then(() => navigate('/'))
            .catch((err) => console.log(err))

    }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col-md-4">
          <img src={movie.imageUrl} alt={movie.name} className="img-fluid" style={{height:'300px'}}/>
        </div>
        <div className="col-md-6">
          <div className="card " style={{backgroundColor:'#e0d6cc', color:'#885133'}}>
            <div className="card-body">
              <h3 className="card-title">{movie.name}</h3>
              <p className="card-text"><strong>Genre:</strong> {movie.genre}</p>
              <p className="card-text"><strong>Rating:</strong> {movie.rating} / 10</p>
              <p className="card-text"><strong>Cast:</strong> {movie.cast}</p>
              <p className="card-text">{movie.description}</p>

              <NavLink
                name=""
                id=""
                className="btn btn-primary"
                style={{backgroundColor:'lightblue',color:'black'}}
                to='/'
                role="button"
                >Back</NavLink
              >
              <NavLink
                name=""
                id=""
                className="btn btn-primary mx-2"
                style={{backgroundColor:'lightgoldenrodyellow',color:'black'}}
                to={`/edit/${movie._id}`}
                role="button"
                >Edit</NavLink
              >
              <NavLink
                name=""
                id=""
                className="btn btn-primary"
                style={{backgroundColor:'lightcoral',color:'black'}}
                onClick={ handleDelete }
                role="button"
                >Delete</NavLink
              >
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
