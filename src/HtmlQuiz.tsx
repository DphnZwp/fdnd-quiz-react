import { useState } from 'react';
import { Link } from "react-router-dom";
import HtmlData from './HtmlData.json';

function HtmlQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuestion = HtmlData.questions[currentQuestionIndex];

  const handleAnswerClick = (answerIndex: number) => {
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <>
      {currentQuestionIndex < HtmlData.questions.length ? (
        <>
          <h1>Html Quiz</h1>
          <h2>{currentQuestion.question}</h2>
          <p>Je hebt { score } goed</p>
          <div className='answers'>
            {currentQuestion.answers.map((answer, index) => (
              <button className='answer' key={index} onClick={() => handleAnswerClick(index)}>
                {answer}
              </button>
            ))}
          </div>
        </>
      ) : (
				<section>
        	<h2 className='results-title'>Je hebt {score} van de {HtmlData.questions.length} vragen goed!</h2>
          <p>Doe de quiz opnieuw als je de score wilt verbeteren.</p>
          <div className='button-row'>
            <Link className='button-link' to="/">Terug naar quizzen</Link>
            <Link className='button-link-secondary' to="/html-quiz">Quiz opnieuw doen</Link>
          </div>
				</section>
      )}
    </>
  );
}

export default HtmlQuiz;
