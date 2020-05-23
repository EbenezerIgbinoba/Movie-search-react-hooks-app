import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import Movie from "./Components/Movie";
import Layout from "./Components/Layout";



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
        filter: false
      };
    case "Filtered Movies":
        return {
          ...state,
          movies: action.payload,
          filter: true
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
  const [filterText, setFilterText] = useState("");

  const filterMovies = (filtertext) => {
    setFilterText(filtertext);
  }

   

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

    const { movies, errorMessage, loading } = state;

    const filteredList = movies.filter((mv) => mv.Title.toLowerCase().includes(filterText.toLowerCase()));


    return (
      <div className="App">
        <Layout filtertext={(filtertext) => filterMovies(filtertext)}>
          <div style={{
             backgroundImage: `linear-gradient(rgb(0, 0, 0 , 0.86), rgb(0, 0, 0 , 0.86)), url('https://img.yts.mx/assets/images/movies/onward_2020/background.jpg')`,
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             backgroundSize: 'cover'
          }}>
            <p className="App-intro">Download YTS YIFY movies: HD smallest size</p>
            <p className="" style={{color:"#ccc",fonSize: '.95em'}}>
            Welcome to the official YTS.MX (.LT) website. Here you can browse and download YIFY movies in  <br />excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.
            </p>
            <p style={{color: '#428bca'}}>IMPORTANT - YTS.MX is the only new official domain for YIFY Movies</p>
            <p style={{fontWeight: '700', marginTop: '20px'}}><i className="fa fa-star" aria-hidden="true" style={{color: '#6AC045', marginRight: '10px', fontSize:'1.15em'}}></i> Popular Downloads </p>
            <div className="divider"></div>
            <div className="movies">
              {loading && !errorMessage ? (
                <span>loading... </span>
              ) : errorMessage ? (
                <div className="errorMessage">{errorMessage}</div>
              ) : (
                filteredList.map((movie, index) => (
                  <Movie key={`${index}-${movie.Title}`} movie={movie} />
                ))
              )}
            </div>
          </div>
          
      </Layout>
     
    </div>
  );
};

export default App;