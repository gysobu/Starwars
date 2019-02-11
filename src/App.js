import React, { Component } from 'react';
import MoviesList from './components/MoviesList'
// import {BrowserRouter,Route,Link} from 'react-router-dom';
// import Routes from './componentsorig/Routes'
// import Form from './componentsorig/Form'
const MOVIES_URL = "https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      movies:[],
      company:"warner brothers"
    }
  }
  componentWillMount(){
    fetch(MOVIES_URL)
    .then((response)=>{
        return response.json()
    }).then((json)=>{
       
      console.log(json.movies)
      this.setState({
        movies:json.movies,

      })

    })
  }
  render() {
    return (
      <div>
        
         <MoviesList movies={this.state.movies} company={this.state.company}/>
      </div>
    );
  }
}

export default App;
