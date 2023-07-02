import { Link } from "react-router-dom"

interface QuizCardProps {
  name: string;
	description: string;
  category: string;
  difficulty: string;
	answertype: string;
	link: string;
	image: string;
	alt: string;
}

function QuizCard({name, description, category, difficulty, answertype, link, image, alt}: QuizCardProps) {
  return (
		<>
			<article>
				<h2>{name}</h2>
				<p className="description">{description}</p>
				<p><strong>Categorie:</strong> {category}</p>
				<p><strong>Moeilijkheidsgraad:</strong> {difficulty}</p>
				<p><strong>Antwoordtype:</strong> {answertype}</p>
				<div className="background-link">
					<Link className="button-link" to={link} >Speel de quiz</Link>
				</div>
			</article>
			<img src={image} alt={alt} />
		</>
  );
}

export default QuizCard;
