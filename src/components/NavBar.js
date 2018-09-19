import React from 'react';
import { NavLink } from "react-router-dom"

const NavBar = props => {
      return (
        <div className="navbar">
            <NavLink to='/'>Play Game</NavLink>
            <NavLink to='/my-scores'>My Scores</NavLink>
            <NavLink to='/top-scores'>Top Scores</NavLink>
        </div>
    )
}
export default NavBar