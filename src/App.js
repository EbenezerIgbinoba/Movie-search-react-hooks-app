import React from 'react';
import Layout from  './Components/AppLayout';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textToBeFiltered: ''
    };
  }
  filterMovies = (filtertext) => {
    this.setState({textToBeFiltered: filtertext});
  }
  render() {
    return (
      <Layout filtertext={(filtertext) => this.filterMovies(filtertext)}>
         <div style={{
             backgroundImage: `linear-gradient(rgb(0, 0, 0 , 0.86), rgb(0, 0, 0 , 0.86)), url('https://img.yts.mx/assets/images/movies/onward_2020/background.jpg')`,
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             backgroundSize: 'cover'
          }}>
            <Banner />
            <Movies key={this.state.textToBeFiltered}  text={this.state.textToBeFiltered}    />
          </div>
      </Layout>
    )
  }
}




export default App;