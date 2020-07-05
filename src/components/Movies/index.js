import React, { useState, useEffect, useReducer } from "react"
import Movie from "../Movie";
import CircularProgress from '@material-ui/core/CircularProgress';
import config_options from '../../config';
import Paginator from '../utils/paginator';





const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b&page=3";
// const IMDB_API = "https://imdb8.p.rapidapi.com/title/get-top-stripe?currentCountry=US&purchaseCountry=US&tconst=tt0944947";



const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
  imdb_movies: [],
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};


const Movies = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [filterText, setFilterText] = useState("");
    const [page, setPage] = useState(1);

    
    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => {
              return response.json();
            })
            .then(jsonResponse => {
              dispatch({
                  type: "SEARCH_MOVIES_SUCCESS",
                  payload: jsonResponse.Search
              });
        });
        setFilterText(props.text);
    }, []);

    const search = searchValue => {
    	dispatch({
      	type: "SEARCH_MOVIES_REQUEST"
    	});
	
        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      	.then(response => response.json())
      	.then(jsonResponse => {
        	if (jsonResponse.Response === "True") {
          	dispatch({
                type: "SEARCH_MOVIES_SUCCESS",
                payload: jsonResponse.Search
          	});
        	} else {
          	dispatch({
                type: "SEARCH_MOVIES_FAILURE",
                error: jsonResponse.Error
          	});
          }
        });
        
        
	  };

    const { movies, errorMessage, loading } = state;

    const filteredList = movies.filter((mv) => mv.Title.toLowerCase().includes(filterText.toLowerCase()));
 
    const goToNextPage = () => {
      let pageNumber = page;
      let newPage = pageNumber + 1
      setPage(newPage);
    } 

    const goTopreviousPage = () => {
      let pageNumber = page;
      let newPage = pageNumber - 1
      setPage(newPage);
    }

    return (
        <div>
          <Paginator currentPage={page} goToNextPage={() => goToNextPage()} goTopreviousPage={() => goTopreviousPage()} />
          <div className="movies">  
                {loading && !errorMessage ? (
                  <div style={{marginTop: '20px'}}>
                    <CircularProgress />
                  </div>
                ) : errorMessage ? (
                    <div className="errorMessage">{errorMessage}</div>
                ) : (
                  filteredList.map((movie, index) => (
                      <Movie key={index} movie={movie} movieId={index} goToMovieDetail={props.goToMovieDetail} />
                  ))
                )}
          </div>
        </div>
        
  );
};

export default Movies;