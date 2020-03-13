import React from "react";

import Road from '../assets/road.jpg';

const Statistics  = () => {
    return (
        <div className = "col-full">
            <div className = "container">
                <p id = "statistics">Statistics</p>
                <div className = "statistics-page">
                    <div className = "statistics-page-text">
                        <p><i className = "icon-leaf"></i>The average footprint for people in Poland is 7.5 tons</p>
                        <p><i className = "icon-leaf"></i>The average for the European Union is about 6.4 tonnes</p>
                        <p><i className = "icon-leaf"></i>The world average Ecological Emission Footprint Carbon dioxide is about 5 tons</p>
                        <p><i className = "icon-leaf"></i>The global goal of combating climate change is 2 tonnes</p>
                    </div>
                    <div className = "statistics-page-img">
                        <img src = {Road} alt = "leaf" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Statistics;