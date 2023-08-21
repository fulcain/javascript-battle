/**
 * TODO:
 * Create a div and make it full height and width (Game box) - DONE
 * Create a circle (ball) in page and place it at a start point - DONE
 * Move the ball by 10px on WASD keys and arrows - DONE
 * Create a square as an obstacle on mouse1 click
 * Make a counter variable
 * When the ball hits any square, Add 1 to the counter
 * After the ball hits any square, reset the ball's position to the starting point
 * Show the counter at top of the page
 */

// Imports

// Ball movement helper function which moves the ball location
import ballMovement from "./js/helpers/ballMovement.js";

// Create square function on mouse1 click helper function
import createSquare from "./js/helpers/createSquare.js";

// Calls the init function on page load
window.addEventListener("DOMContentLoaded", init);

// Calls functions that need to be invoked on page load
function init() {
	ballMovement();
    createSquare()
}
