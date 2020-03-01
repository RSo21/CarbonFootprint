import React, { useState, useEffect} from 'react';


const Question = (props) => {
    const [question, setQuestion] = useState(null);
    useEffect(()=>{
        fetch(`http://localhost:4000/questions/${props.match.params.id}`)
        .then((response)=>{
            return response.json();
        })
        .then((question)=>{
            console.log(question)
            setQuestion(question);
        });
    },[]);

    // handleClick = () => {
    //     const currentPoints = this.state.points + question.answer.footprint;
    //     this.setState({
    //       points: currentPoints,
    //     })
    //   };

if (!question){
    return <p>ładowanie</p>
}
  return (
      <>
    <div className = "page-start">
        <p className = "start-type">{question.title}</p>
        <div>
            {question.answers.map((answer, id) => <div className = "start-answer" key = {id}>{answer.text}</div>)}
        </div>
        <div className = "start-buttons">
            <button
            onClick={() => props.onPrevQuestion(props.match.params.id)}
            className = "start-button-prev">PREV
            </button>
            <button 
            onClick={() => props.onNextQuestion(props.match.params.id)}
            className = "start-button-next">NEXT</button>
        </div>

    </div>
    {/* <p>Question: {props.match.params.id}</p> */}

    </>
  );
}


export default Question;