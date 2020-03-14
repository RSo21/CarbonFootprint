import React from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    
      <div className = "page-start-text" key={props.questionId}>
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <Question content={props.question} />
        <ul>
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
   
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;


// import React from 'react';
// import PropTypes from 'prop-types';

// function Quiz({
//   question,
//   onAnswerSelected,
// }) {
//   return (
//     <div className = "page-start-text">
//       {/* Nie wiem skąd brałaś pytania */}
//       {/* <h2 className = "start-type">{content}</h2>  */}
//       <ul>
//         {question.answers.map((answer, index) => (
//           <li
//             key={answer.content}
//             className="start-answer"
//             onClick={() => {
//               onAnswerSelected(index)
//             }}
//           >
//             {answer.content}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// Quiz.propTypes = {
//   question: PropTypes.object.isRequired,
//   onAnswerSelected: PropTypes.func.isRequired,
// };

// export default Quiz;