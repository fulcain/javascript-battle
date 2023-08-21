// Check if the ball collides with squares or not
import checkCollision from "./checkCollision.js";

const positions = {
	top: 10,
	left: 10,
};

/**
 * Moves the ball based on key events.
 * @returns {undefined}
 */
const ballMovement = () => {
	// Select ball element
	const ballEl = document.querySelector("#ball");

	window.addEventListener("keydown", (e) => {
		// Move Up
		if (e.code === "KeyW" || e.code === "ArrowUp") {
			// Update top variable
			positions.top -= 10;

			// Update the ball style based on top variable value
			ballEl.style.top = `${positions.top}px`;
		}

		// Move Down
		if (e.code === "KeyS" || e.code === "ArrowDown") {
			// Update top variable
			positions.top += 10;

			// Update the ball style based on top variable value
			ballEl.style.top = `${positions.top}px`;
		}

		// Move Left
		if (e.code === "KeyA" || e.code === "ArrowLeft") {
			// Update left variable
			positions.left -= 10;

			// Update the ball style based on left variable value
			ballEl.style.left = `${positions.left}px`;
		}

		// Move Right
		if (e.code === "KeyD" || e.code === "ArrowRight") {
			// Update left variable
			positions.left += 10;

			// Update the ball style based on top variable value
			ballEl.style.left = `${positions.left}px`;
		}

		// Check for collision
		checkCollision(positions);
	});
};

export default ballMovement;
