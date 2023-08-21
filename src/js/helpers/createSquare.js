/**
 * Creates a square element at the clicked position inside the game box.
 */
const createSquare = () => {
	// Select game box
	const gameBoxEl = document.querySelector("#game-box");

	// Define posX and posY of mouse Click
	let posX = 0;
	let posY = 0;

	// Get the position X and Y and set it to "posX" and "posY" variables
	document.addEventListener("click", (e) => {
		posX = e.clientX;
		posY = e.clientY;

		// Check if a square already exists at the clicked position
		const existingSquare = Array.from(
			gameBoxEl.getElementsByClassName("squares")
		).find(
			(square) =>
				square.style.top === `${posY - 50}px` &&
				square.style.left === `${posX - 50}px`
		);

        // If another square with the same position exists, return the function
		if (existingSquare) return;

		// Create square element
		const squareEl = document.createElement("div");
		squareEl.classList.add("squares");

		// "-50" is half of the square element size
		squareEl.style.top = `${posY - 50}px`;
		squareEl.style.left = `${posX - 50}px`;

		gameBoxEl.append(squareEl);
	});
};

export default createSquare;
