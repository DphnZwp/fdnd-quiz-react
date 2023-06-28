import QuizCard from "./components/QuizCard";

function App() {
  document.title = 'FDND quizzen';

  return (
    <>
      <h1>FDND Quizzen</h1>
      <p>Test je kennis en vaardigheden op het gebied van front-end ontwikkeling met onze uitdagende quizzen. Verbeter je vaardigheden en bereid je voor op een succesvolle carrière in de wereld van front-end ontwikkeling. Veel succes!</p>
      <QuizCard
      name="HTML quiz"
      description="Deze quiz gaat over verschillende termen die te maken hebben met CSS. Het duurt 5 minuten om de quiz te maken"
      category="dfsfdfs"
      answertype="dfsdfs"
      link="/"
      image="/"
      alt="ddfdf"
      />
      <QuizCard
      name="CSS quiz"
      description="Deze quiz gaat over verschillende termen die te maken hebben met HTML. Het duurt 5 minuten om de quiz te maken"
      category="dfsfdfs"
      answertype="safsafas"
      link="/"
      image="/"
      alt="ddfdf"
      />
    </>
  );
}

export default App;
