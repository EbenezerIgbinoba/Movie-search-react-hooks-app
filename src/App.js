import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import Movie from "./Components/Movie";
import Layout from "./Components/Layout";
// const [loading, setLoading] = useState(true);
// const [movies, setMovies] = useState([]);
// const [errorMessage, setErrorMessage] = useState(null);


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";
const IMDB_API = "https://imdb8.p.rapidapi.com/title/get-top-stripe?currentCountry=US&purchaseCountry=US&tconst=tt0944947";



const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
  imdb_movies: []
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
        movies: action.payload
      };
    case "IMDB_API_SUCCESS":
      return {
        ...state,
        loading: true,
        imdb_movies: action.payload
      }
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



const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
    
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
        
            dispatch({
                type: "SEARCH_MOVIES_SUCCESS",
                payload: jsonResponse.Search
        	});
        });
       
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

    const { movies, errorMessage, loading, imdb_movies } = state;


    return (
      <div className="App">
        <Layout>
          <p className="App-intro">Download YTS YIFY movies: HD smallest size</p>
          <p className="" style={{color:"#ccc",fonSize: '.95em'}}>
          Welcome to the official YTS.MX (.LT) website. Here you can browse and download YIFY movies in  <br />excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.
          </p>
          <div className="movies">
            {loading && !errorMessage ? (
              <span>loading... </span>
            ) : errorMessage ? (
              <div className="errorMessage">{errorMessage}</div>
            ) : (
              movies.map((movie, index) => (
                <Movie key={`${index}-${movie.Title}`} movie={movie} />
              ))
            )}
          </div>
      </Layout>
     
    </div>
  );
};

export default App;