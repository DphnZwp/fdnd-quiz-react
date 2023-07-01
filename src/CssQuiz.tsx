import { useState, useEffect } from 'react';
import QuizData from './QuizData.json';

function CssQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [Results, setResults] = useState(false);

  const currentQuestion = QuizData.questions[currentQuestionIndex];

  useEffect(() => {
    if (quizFinished) {
      setResults(true);
    }
  }, [quizFinished]);

  const handleAnswerClick = (answerIndex: number) => {
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }

    if (currentQuestionIndex < QuizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <>
      {!Results && (
        <>
          <h1>CSS Quiz</h1>
          <h2>{currentQuestion.question}</h2>
          <ul className='answers'>
            {currentQuestion.answers.map((answer, index) => (
              <li className='answer' key={index} onClick={() => handleAnswerClick(index)}>
                {answer}
              </li>
            ))}
          </ul>
        </>
      )}
      {Results && (
				<section>
        	<h2>Quiz finished! You scored {score} out of {QuizData.questions.length}</h2>
				</section>
      )}
    </>
  );
}

export default CssQuiz;
