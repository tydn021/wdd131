const visitsDisplay = document.querySelector("#reviewSubmitted");

let reviewSubmitted = Number(window.localStorage.getItem("reviewSubmitted-ls")) || 0;

reviewSubmitted++; 
localStorage.setItem("reviewSubmitted-ls", reviewSubmitted);

visitsDisplay.textContent = reviewSubmitted;
