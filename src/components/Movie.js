import React from "react";
import {useState} from 'react';




const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie }) => {
  const [onHover , setHoverState] = useState(false);
  let classList = ['movie_wrapper'];
  classList = onHover ? ['movie_wrapper_overlay'] : ['movie_wrapper'];
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
      <div className="movie" onMouseEnter={() => setHoverState(true)} onMouseLeave={() => setHoverState(false)}>
        <div className={classList}>
          <img
            width="200"
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
          />
          <div className="movie__overlay_content">
              <h3 style={{textAlign: 'center'}}>6.5/10</h3>
              <h3 style={{textAlign: 'center'}}>6.5/10</h3>
              <div style={{textAlign: 'center'}}>
                <button>View Details</button>
              </div>
          </div>
        </div>
        <h5 className="movie__title_tag">{movie.Title} <br />
          <span style={{color: "grey", fontSize: '16px', textAlign:'left'}}>({movie.Year})</span>
        </h5>
        
      </div>
    );
};


export default Movie;