import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";

 class ScrollBtn extends Component {
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
    render() {
        const { width } = this.state;
        const isMobile = width <= 978;

        if(isMobile){
            return(
                <div>
                    <ScrollUpButton style={{backgroundColor: "#57B850", width: '2.3em', height: '2.3em'}} />
                </div>
            )

        }else{
            return (
                <div>
                    <ScrollUpButton style={{backgroundColor: "#57B850"}}/>
                </div>
            );
        }
    }
}

export default ScrollBtn;