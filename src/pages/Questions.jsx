// import React from 'react';

// import {Component} from 'react';

import "../fontello/css/fontello.css";

import React, { useState, useEffect} from 'react';


const Questions = (props) =>{
    // const [questionsList, setQuestionsList] = useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:4000/questions')
    //     .then((response)=>{
    //         return response.json();
    //     })
    //     .then((questions)=>{
    //         // console.log(questions)
    //         setQuestionsList(questions);
    //     });
    // },[]);
 
   
        return (

            <>
            
            {props.questions.map((question)=>{
                // console.log(questions)
                return (
                    <>
                   
                    <div className = "page-start">
                        <p className = "start-type">{question.title}</p>
                        <div>
                            {/* {questions.answer.map((answers, id) => <div className = "start-answer" key={id}>{answers}</div>)} */}
                        </div>
                    </div>
                </>
                );
            })}
        </>
        )
    
    
};
export default Questions;





// state = {
//     footprintList: [],
// }

// componentDidMount() {
//     fetch(`http://localhost:4000/footprint`)
//     .then((response) => {
//         return response.json();
        
//     })
//     .then((data) => {
//         this.setState({
//             footprintList: data,
//         })
//     });
// }
