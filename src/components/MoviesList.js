import React from 'react';
import './movies.css'
import PropTypes from 'prop-types';
const IMAGES_URL="https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/public/images/";
class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let movieItems =this.props.movies.map((element,index)=>{
            return <li key={index}>
                   <img className="hero-image" src={`${IMAGES_URL}${element.hero_image}`}/>
               <label>{element.title}</label> 
                 </li> 
                 })
        return (
            <div>
                {movieItems}   
            </div>
            
        );
    }
}


MoviesList.propTypes = {
    
};

export default MoviesList
