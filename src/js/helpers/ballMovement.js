/**
 * Moves the ball based on key events.
 * @returns {undefined}
 */
const ballMovement = () => {
	// Select ball element
	const ballEl = document.querySelector("#ball");

	// top movement amount by pixels
	let top = 10;

	// Left movement amount by pixels
	let left = 10;

	window.addEventListener("keydown", (e) => {
		// Move Up
		if (e.key === "w" || e.key === "ArrowUp") {
			// Update top variable
			top -= 10;

			// Update the ball style based on top variable value
			ballEl.style.top = `${top}px`;
		}

		// Move Down
		if (e.key === "s" || e.key === "ArrowDown") {
			// Update top variable
			top += 10;

			// Update the ball style based on top variable value
			ballEl.style.top = `${top}px`;
		}

		// Move Left
		if (e.key === "a" || e.key === "ArrowLeft") {
			// Update left variable
			left -= 10;

			// Update the ball style based on left variable value
			ballEl.style.left = `${left}px`;
		}

		// Move Right
		if (e.key === "d" || e.key === "ArrowRight") {
			// Update left variable
			left += 10;

			// Update the ball style based on top variable value
			ballEl.style.left = `${left}px`;
		}
	});
};

export default ballMovement;
