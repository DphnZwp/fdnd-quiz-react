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
				<p>{description}</p>
				<p><strong>Categorie:</strong> {category}</p>
				<p><strong>Difficulty:</strong> {difficulty}</p>
				<p><strong>Antwoordtype:</strong> {answertype}</p>
				<a href={link} >Speel de quiz</a>
			</article>
			<img src={image} alt={alt} />
		</>
  );
}

export default QuizCard;
