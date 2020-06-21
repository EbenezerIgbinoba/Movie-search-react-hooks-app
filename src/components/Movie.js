import React from "react";
import {useState} from 'react';




const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie, movieId }) => {
  console.log(movie);
  const [onHover , setHoverState] = useState({});
  let classList = 'movie_wrapper';
  classList = onHover.state ? 'movie_wrapper_overlay' : 'movie_wrapper';
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
      <div className="movie" >
        <div className={`movie_wrapper ${onHover.state ? 'overlay_border overlay_linear_gradient' : null}`} onMouseEnter={() => setHoverState({state: true, movieId: movieId})} onMouseLeave={() => setHoverState({state: false, movieId: movieId})}>
          <img
            width="200"
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
          />
         {onHover.state ? 
          (
            <div className="movie__overlay_content">
              <div>
                <p style={{textAlign: 'center'}}> <i className="fa fa-star" aria-hidden="true" style={{color: '#6AC045', marginRight: '10px', fontSize:'1.15em'}}></i></p>
                <h2 style={{textAlign: 'center', marginTop: '10px'}}>6.5/10</h2> 
                <h3  style={{textAlign: 'center', marginTop: '40px'}}>{movie.Type}</h3>
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