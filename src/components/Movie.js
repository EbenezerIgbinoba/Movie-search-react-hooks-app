import React from "react";
import {useState} from 'react';




const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie, key }) => {
  const [onHover , setHoverState] = useState({});
  let classList = 'movie_wrapper';
  classList = onHover.state ? 'movie_wrapper_overlay' : 'movie_wrapper';
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
      <div className="movie" >
        <div className="movie_wrapper" onMouseEnter={() => setHoverState({state: true, key: key})} onMouseLeave={() => setHoverState({state: false, key: key})}>
          <img
            width="200"
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
          />
         {onHover.state ? 
          (
            <div className="movie__overlay_content">
              <div><i className="fa fa-star" aria-hidden="true" style={{color: '#6AC045', marginRight: '10px', fontSize:'1.15em'}}></i> </div>
              <div>
                <h2>6.5/10</h2>
              </div>
          </div>
          ) : 
          null
        }
        {onHover.state ? 
          (
            <div className="details_button__wrapper">
              <button href="https://yts.mx/" className="button success">View Details</button>
            </div>
          )
          : null
        }
         
      </div>
        <h5 className="movie__title_tag">{movie.Title} <br />
          <span style={{color: "grey", fontSize: '16px', textAlign:'left'}}>({movie.Year})</span>
        </h5>
        
      </div>
    );
};


export default Movie;