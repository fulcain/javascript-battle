const incrementScore = () => {
	const scoreEl = document.querySelector("#score");

	// Extract the current score from the score element's inner text
	// by matching one or more consecutive digits using a regular expression
	const currentScore = parseInt(scoreEl.innerText.match(/\d+/)[0]);

	// Increment the current score by 1
	const updatedScore = currentScore + 1;

	// Update the score element's inner text with the updated score
	scoreEl.innerText = `Score: ${updatedScore}`;
};

export default incrementScore;
