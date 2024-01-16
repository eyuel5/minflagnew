// Flag data
const flags = [
    { name: "Algeria", imageUrl: "Algeria_Flag.png" },
    { name: "Angola", imageUrl: "Angola_Flag.png" },
    { name: "Benin", imageUrl: "Benin_Flag.png" },
    { name: "Botswana", imageUrl: "Botswana_Flag.png" },
    { name: "Burkina Faso", imageUrl: "Burkina_Faso_Flag.png" },
    { name: "Burundi", imageUrl: "Burundi_Flag.png" },
    { name: "Cameroon", imageUrl: "Cameroon_Flag.png" },
    { name: "Cape Verde", imageUrl: "Cape_Verde_Flag.png" },
    { name: "Central African Republic", imageUrl: "Central_African_Republic_Flag.png" },
    { name: "Chad", imageUrl: "Chad_Flag.png" },
    { name: "Comoros", imageUrl: "Comoros_Flag.png" },
    { name: "Congo", imageUrl: "Congo_Flag.png" },
    { name: "Ivory Coast", imageUrl: "Ivory_Coast_Flag.png" },
    { name: "Democratic Republic of Congo", imageUrl: "Democratic_Republic_of_Congo_Flag.png" },
    { name: "Djibouti", imageUrl: "Djibouti_Flag.png" },
    { name: "Egypt", imageUrl: "Egypt_Flag.png" },
    { name: "Equatorial Guinea", imageUrl: "Equatorial_Guinea_Flag.png" },
    { name: "Eritrea", imageUrl: "Eritrea_Flag.png" },
    { name: "Eswatini", imageUrl: "Eswatini_Flag.png" },
    { name: "Ethiopia", imageUrl: "Ethiopia_Flag.png" },
    { name: "Gabon", imageUrl: "Gabon_Flag.png" },
    { name: "Gambia", imageUrl: "Gambia_Flag.png" },
    { name: "Ghana", imageUrl: "Ghana_Flag.png" },
    { name: "Guinea", imageUrl: "Guinea_Flag.png" },
    { name: "Guinea_Bissau", imageUrl: "Guinea_Bissau_Flag.png" },
    { name: "Kenya", imageUrl: "Kenya_Flag.png" },
    { name: "Lesotho", imageUrl: "Lesotho_Flag.png" },
    { name: "Liberia", imageUrl: "Liberia_Flag.png" },
    { name: "Libya", imageUrl: "Libya_Flag.png" },
    { name: "Madagascar", imageUrl: "Madagascar_Flag.png" },
    { name: "Malawi", imageUrl: "Malawi_Flag.png" },
    { name: "Mali", imageUrl: "Mali_Flag.png" },
    { name: "Mauritania", imageUrl: "Mauritania_Flag.png" },
    { name: "Mauritius", imageUrl: "Mauritius_Flag.png" },
    { name: "Morocco", imageUrl: "Morocco_Flag.png" },
    { name: "Mozambique", imageUrl: "Mozambique_Flag.png" },
    { name: "Namibia", imageUrl: "Namibia_Flag.png" },
    { name: "Niger", imageUrl: "Niger_Flag.png" },
    { name: "Nigeria", imageUrl: "Nigeria_Flag.png" },
    { name: "Rwanda", imageUrl: "Rwanda_Flag.png" },
    { name: "Sao Tome and Principe", imageUrl: "Sao_Tome_and_Principe_Flag.png" },
    { name: "Senegal", imageUrl: "Senegal_Flag.png" },
    { name: "Seychelles", imageUrl: "Seychelles_Flag.png" },
    { name: "Sierra Leone", imageUrl: "Sierra_Leone_Flag.png" },
    { name: "Somalia", imageUrl: "Somalia_Flag.png" },
    { name: "South Africa", imageUrl: "South_Africa_Flag.png" },
    { name: "South Sudan", imageUrl: "South_Sudan_Flag.png" },
    { name: "Sudan", imageUrl: "Sudan_Flag.png" },
    { name: "Tanzania", imageUrl: "Tanzania_Flag.png" },
    { name: "Togo", imageUrl: "Togo_Flag.png" },
    { name: "Tunisia", imageUrl: "Tunisia_Flag.png" },
    { name: "Uganda", imageUrl: "Uganda_Flag.png" },
    { name: "Zambia", imageUrl: "Zambia_Flag.png" },
    { name: "Zimbabwe", imageUrl: "Zimbabwe_Flag.png" }
];


let currentFlagIndex;
let usedFlags = [];

function startGame() {
    timeCounter()
    // Check if all flags have been used
    if (usedFlags.length === flags.length) {
        // Reset usedFlags array when all flags have been displayed
        usedFlags = [];
    }

    // Ensure that the current flag is included in the options
    let options = shuffle([...flags]);
    while (usedFlags.includes(options[0])) {
        options = shuffle([...flags]);
    }

    // only use 4 options...
    options = options.slice(0, 4)

    // Display the selected flag image
    currentFlagIndex = flags.indexOf(options[0]);
    const flagImage = document.getElementById("flag-image");
    flagImage.src = `img/${flags[currentFlagIndex].imageUrl}`;

    // Add the used flag to the usedFlags array
    usedFlags.push(flags[currentFlagIndex]);

    // Shuffle the options array to randomize the position of the correct answer
    options = shuffle(options);

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
        // Correct Answer: Change button color to green for 1 second
        button.style.backgroundColor = '#1d9e49'; // Green color
        setTimeout(() => {
            button.style.backgroundColor = ''; // Reset to default
            // Start a new game
            startGame();
        }, 1000); // 1 second delay
    } else {
        // Wrong Answer: Change button color to red for 1 second
        button.style.backgroundColor = '#ce1226'; // Red color
        setTimeout(() => {
            button.style.backgroundColor = ''; // Reset to default
            // Start a new game
            startGame();
        }, 1000); // 1 second delay
    }
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

//time counter function
function timeCounter() {
    let timeCount = 240; // Initial time count
    const timeSpan = document.getElementById("time-count");

    // Function to update time count
    function updateTimeCount() {
        timeCount--;
        timeSpan.textContent = timeCount;
    }

    // Set interval to update time count every second (1000 milliseconds)
    setInterval(updateTimeCount, 1000);
}

// Start the game when the page loads
window.onload = startGame;


