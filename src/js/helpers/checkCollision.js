// Import incrementScore increment the score by one every time the square collides with a square
import incrementScore from "./incrementScore.js";

// Import scoreAlert from silverBox template to show that the score has been added
import { scoreAlert } from "../templates/silverBox.js";

/**
 * Checks for collisions between the ball and squares, and updates the positions accordingly.
 * @param {Object} positions - The positions object containing the top and left properties.
 */
const checkCollision = (positions) => {
	// Select ball element
	const ballEl = document.querySelector("#ball");

	// Select all square elements
	const squareEls = document.querySelectorAll(".squares");

	// Get the position and dimensions of the ball
	const ballRect = ballEl.getBoundingClientRect();
	const ballLeft = ballRect.left;
	const ballTop = ballRect.top;
	const ballRight = ballRect.right;
	const ballBottom = ballRect.bottom;

	// Iterate over all square elements
	squareEls.forEach((squareEl) => {
		// Get the position and dimensions of each square
		const squareRect = squareEl.getBoundingClientRect();
		const squareLeft = squareRect.left;
		const squareTop = squareRect.top;
		const squareRight = squareRect.right;
		const squareBottom = squareRect.bottom;

		// Check for collision between the ball and square
		if (
			ballLeft < squareRight &&
			ballRight > squareLeft &&
			ballTop < squareBottom &&
			ballBottom > squareTop
		) {
			// Update the positions object
			positions.top = 10;
			positions.left = 10;

			// Call the incrementScore function to increase the score
			incrementScore();
			silverBox(scoreAlert());

			// Update ball element styles
			ballEl.style.top = `${positions.top}px`;
			ballEl.style.left = `${positions.left}px`;
		}
	});
};

export default checkCollision;
