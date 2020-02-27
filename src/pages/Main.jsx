import React from 'react';
import Navigation from '../components/Navigation'

const Main = () =>{
    return(
        <>
        <header>
        <Navigation />
        </header>
        <div>
            <h1>What is your Carbon Footprint?</h1>
            
            <button>START</button>
        </div>
        <div>

        </div>
        <footer>
            <p>&#169;</p>
        </footer>
        </>
    );
};

export default Main;