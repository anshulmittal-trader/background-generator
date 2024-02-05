// Heading selected where we need to insert the final color codes
var css = document.querySelector("h3");
// First color picker selected
var color1 = document.querySelector(".color1");
// Second color picker selected
var color2 = document.querySelector(".color2");
// Body is selected so that it can change according to the colors picked by the user
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	// textContent : this is another way to add the content to the text node.
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);