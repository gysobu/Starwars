import React from 'react';
// import PropTypes from 'prop-types';
import {Link}  from 'react-router-dom'
import './Menu.css'


class Menu extends React.Component {
    // constructor(props) {
    //     super(props);
        
    // }

    render() {
        return (
            <div>
                <ul className="menu">
                    <li> <Link to='/'>Home </Link></li>
                    <li><Link to ='/movielist'>MovieList</Link></li>
                </ul>
            </div>
            
        );
    }
}


Menu.propTypes = {
    
};

export default Menu
