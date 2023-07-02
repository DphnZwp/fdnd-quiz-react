import QuizCard from "./components/QuizCard";

function Quizzes() {
  document.title = 'FDND Quizzen';
	
  return (
    <section className="quizzes">
			<div className="intro">
				<h1>FDND Quizzen</h1>
				<p>Test je kennis en vaardigheden op het gebied van front-end ontwikkeling met onze uitdagende quizzen. Verbeter je vaardigheden en bereid je voor op een succesvolle carrière in de wereld van front-end ontwikkeling. Veel succes!</p>
			</div>
			<QuizCard
				name="HTML quiz"
				description="Deze quiz gaat over verschillende termen die te maken hebben met CSS. De quiz duurt ongeveer 2 minuten."
				category="CSS"
				difficulty="Makkelijk"
				answertype="Meerkeuze"
				link="/html-quiz"
				image="/html-quiz.png"
				alt="ddfdf"
			/>
			<QuizCard
				name="CSS quiz"
				description="Deze quiz gaat over verschillende termen die te maken hebben met HTML. De quiz duurt ongeveer 2 minuten."
				category="HTML"
				difficulty="Makkelijk"
				answertype="Meerkeuze"
				link="/css-quiz"
				image="/css-quiz.png"
				alt="ddfdf"
			/>
    </section>
  );
}

export default Quizzes;
