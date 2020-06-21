import React, { useState, useEffect, useReducer } from "react"
import Movie from "../Movie";



const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";
const IMDB_API = "https://imdb8.p.rapidapi.com/title/get-top-stripe?currentCountry=US&purchaseCountry=US&tconst=tt0944947";



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

    
    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
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


    return (
        <div className="movies">
            {loading && !errorMessage ? (
            <span>loading... </span>
            ) : errorMessage ? (
                <div className="errorMessage">{errorMessage}</div>
            ) : (
            filteredList.map((movie, index) => (
                <Movie key={index} movie={movie} movieId={index} />
            ))
            )}
        </div>
  );
};

export default Movies;