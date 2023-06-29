import QuizCard from "./components/QuizCard";

function Quizzes() {
  document.title = 'FDND Quizzen';
  return (
    <>
			<h1>FDND Quizzen</h1>
			<p>Test je kennis en vaardigheden op het gebied van front-end ontwikkeling met onze uitdagende quizzen. Verbeter je vaardigheden en bereid je voor op een succesvolle carrière in de wereld van front-end ontwikkeling. Veel succes!</p>
			<QuizCard
			name="HTML quiz"
			description="Deze quiz gaat over verschillende termen die te maken hebben met CSS. Het duurt 5 minuten om de quiz te maken"
			category="CSS"
			difficulty="Makkelijk"
			answertype="Meerkeuze"
			link="/css-quiz"
			image="/"
			alt="ddfdf"
			/>
			<QuizCard
			name="CSS quiz"
			description="Deze quiz gaat over verschillende termen die te maken hebben met HTML. Het duurt 5 minuten om de quiz te maken"
			category="HTML"
			difficulty="Makkelijk"
			answertype="Meerkeuze"
			link="/"
			image="/"
			alt="ddfdf"
			/>
    </>
  );
}

export default Quizzes;
