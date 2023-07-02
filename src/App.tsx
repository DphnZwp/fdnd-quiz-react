import Footer from "./components/Footer";
import Quizzes from "./Quizzes";
import CssQuiz from "./CssQuiz";
import HtmlQuiz from "./HtmlQuiz";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <main>
      <Routes>
        <Route path="/" element={<Quizzes />} />
        <Route path="/css-quiz" element={<CssQuiz />} />
        <Route path="/html-quiz" element={<HtmlQuiz />} />
      </Routes>
    </main>
      <Footer />
    </>
  );
}

export default App;
