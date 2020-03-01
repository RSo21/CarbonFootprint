import {NavLink} from "react-router-dom";
import React from "react";

import Forest from '../assets/kyle-glenn.jpg';


const Content  = () => {
    return (
    <section className = "content-main">
        <div className = "content-foto" >
            <img src = {Forest} alt = "forest" />
        </div>
        <div className = "content-element">
            <div className = "content-text">
                <p>Do you know...</p>
                <p>What Is your Carbon Footprint?</p>
                
            </div>
            <div className = "content-buttons">
                <button className = "content-button"> <NavLink exact to="/energy" >START <i className = "icon-play"></i></NavLink></button>
                <button className = "content-button">READ MORE <i className = "icon-down-open"></i></button>
            </div>
        </div>
    </section>
    )
}
export default Content;
