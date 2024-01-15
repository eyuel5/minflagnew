// Sample flag data
const flags = [
    { name: "Algeria", imageUrl: "Algeria_flag.png" },
    { name: "Ethiopia", imageUrl: "Ethiopia_flag.png" },
    { name: "Congo", imageUrl: "Congo_flag.png" }
    
];

let currentFlagIndex;

function startGame() {
    // Randomly select a flag for the game
    currentFlagIndex = Math.floor(Math.random() * flags.length);
    
    // Display the selected flag image
    const flagImage = document.getElementById("flag-image");
    flagImage.src = `img/${flags[currentFlagIndex].imageUrl}`;

    // Shuffle the options array
    const options = shuffle([...flags]);
    
    // Display the options on buttons
    const optionButtons = document.querySelectorAll(".option-button");
    optionButtons.forEach((button, index) => {
        button.textContent = options[index].name;
    });
}

function checkAnswer(button) {
    const selectedCountry = button.textContent;

    // Check if the selected country matches the correct answer
    if (selectedCountry === flags[currentFlagIndex].name) {
        alert("Correct!");
    } else {
        alert(`Wrong! The correct answer is ${flags[currentFlagIndex].name}`);
    }

    // Start a new game
    startGame();
}

// Shuffle an array using the Fisher-Yates algorithm
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Start the game when the page loads
window.onload = startGame;
