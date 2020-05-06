import {NavLink} from "react-router-dom";
import React from "react";

import Forest from '../assets/kyle-glenn.jpg';


const Content  = () => {
    return (
    <section className = "content-main col-full-mob">
        <div className = "content-foto" >
            <img src = {Forest} alt = "forest" />
        </div>
        <div className = "content-element">
            <div className = "content-text">
                <p>Do you know...</p>
                <p>What Is your Carbon Footprint?</p>
                
            </div>
            <div className = "content-buttons">
                <NavLink exact to="/start"><button className = "content-button"> START <i className = "icon-play"></i></button></NavLink>
                <a href = "#about"><button className = "content-button">READ MORE<i className = "icon-down-open"></i></button></a> 
            </div>
        </div>
    </section>
    )
}
export default Content;
