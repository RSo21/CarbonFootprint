import {NavLink} from "react-router-dom";
import React, { Component } from "react";

import { slide as Menu } from "react-burger-menu";



class  Navigation extends Component {
    state = {
        width: window.innerWidth,
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };


    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    render(){
        const { width } = this.state;
        const isMobile = width <= 978;
    
        if (isMobile){
            return(
                <header className = "page-header-mobile">
                    <div><i className = "icon-menu" menuClicked={this.handleClick}></i> 
                     </div>
                    <Menu className = "menu-mobile" pageWrapId={"page-wrap"} isOpen={true} width={ 200 }>
                        <p activeclass="active" spy="true" offset={50} duration={500}>
                        <a href = "/CarbonFootprint/">HOME</a>
                        </p>
                        <p activeclass="active"  spy="true" offset={50} duration={500}>
                        <a href = "#about">ABOUT</a>  
                        </p>
                        <p activeclass="active" spy="true"  offset={50} duration={500}>
                        <a href = "#statistics">STATISTICS</a>
                        </p>
                        <p>
                        <NavLink exact to="/start" >START</NavLink>
                        </p>
                        <p activeclass="active" to="start" spy="true" offset={50} duration={500}>
                        <a href ="#contact">CONTACT</a>
                        </p>
                    </Menu>
                </header>
            )
        }
        else{

        }
    return (
    <header className = "page-header">
        <div className = "col-full col-full-mob nav">
            <div className = "logo"><a href = "/CarbonFootprint/">CarbonFootprint</a></div>
            <nav className = "page-nav"><i className = "icon-menu"></i>
                <ul className = "page-nav-list">
                    <li>
                        <a href = "/CarbonFootprint/">HOME</a>
                    </li>
                    <li>
                        <a href = "#about">ABOUT</a>   
                    </li>
                    <li>
                        <a href = "#statistics">STATISTICS</a>
                    </li>
                    <li>
                        <NavLink exact to="/start">START</NavLink>
                    </li>
                    <li>
                        <a href ="#contact" >CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
}
}
export default Navigation;