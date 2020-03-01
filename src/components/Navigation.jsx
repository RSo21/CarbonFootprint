import {NavLink} from "react-router-dom";
import React from "react";



const Navigation  = () => {
    return (
    <header className = "page-header">
        <div className = "col-full col-full-mob nav">
            <div className = "logo">CarbonFootprint</div>
            <nav className = "page-nav"><i className = "icon-menu"></i>
                <ul className = "page-nav-list">
                    <li>
                        <a href = "#">HOME</a>
                    </li>
                    <li>
                        <a href = "#about">ABOUT</a>
                    </li>
                    <li>
                        <NavLink exact to="/energy" >START</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" >CONTACT</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
}
export default Navigation;