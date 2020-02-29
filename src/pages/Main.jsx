import React from 'react';
import Navigation from '../components/Navigation'
import Content from '../components/Content'

import {Component} from 'react';


class Main extends Component{
    state = {
        footprintList: [],
    }

    componentDidMount() {
        fetch(`http://localhost:4000/footprint`)
        .then((response) => {
            return response.json();

        })
        .then((data) => {
            this.setState({
                footprintList: data,
            })
        });
    }


render(){
    const { footprintList} = this.state;
    return(
        <>
        <Navigation />
        <Content />
        <footer>
            <p>&#169;</p>
        </footer>
        </>
    );
}
}


export default Main;