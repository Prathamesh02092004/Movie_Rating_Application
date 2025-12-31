import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center text-white mt-5"
      style={{ backgroundColor: "#f0e6d7", padding: "1.5rem 0" ,color:'#885133'}}
    >
      <div className="container">
        <p className="mb-1" style={{color:'#885133'}}>&copy; {new Date().getFullYear()} MyMovieApp</p>
        <div>
          <p style={{ fontSize: "0.9rem",color:'#885133' }}>
              MOVIE-BLOG is your go-to platform to browse, add, and edit your favorite movies.  
              Explore new titles, check ratings, and manage your personal movie collection easily.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
