import {NavLink} from "react-router-dom";
import React from "react";


const activeStyle = {
    color: 'red',
}

const Navigation  = () => {
    return (
        <ul>
            <li>
                <NavLink exact to="/home" activeStyle ={activeStyle}>Home</NavLink>
            </li>
            <li>
                <NavLink exact to="/about" activeStyle ={activeStyle}>About</NavLink>
            </li>
            <li>
                <NavLink exact to="/whatisyourcarbonfootprint" activeStyle ={activeStyle}>Start</NavLink>
            </li>
            <li>
                <NavLink exact to="/contact" activeStyle ={activeStyle}>Contact</NavLink>
            </li>
        </ul>
    )
}
export default Navigation;