const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");

	const isOpen = hamButton.classList.contains("open");
	hamButton.setAttribute("aria-expanded", `${isOpen}`);
});

const visitsDisplay = document.querySelector("#timesVisited");

let timesVisited = Number(window.localStorage.getItem("timesVisited-ls")) || 0;

timesVisited++; 
localStorage.setItem("timesVisited-ls", timesVisited);

visitsDisplay.textContent = `${timesVisited}` ;