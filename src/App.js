import React from 'react';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import './App.css';

const  App = (props) => {
    return (
      <div style={{
          backgroundImage: `linear-gradient(rgb(0, 0, 0 , 0.86), rgb(0, 0, 0 , 0.86)), url('https://img.yts.mx/assets/images/movies/onward_2020/background.jpg')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
      }}>
        <Banner />
        <Movies key={props.filerText}  text={props.filerText}    />
      </div>
    )
}

export default App;