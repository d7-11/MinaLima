// Get references to the icon and the menu
const burgerMenuIcon = document.getElementById('burger-menu-icon');
const menu = document.querySelector('nav ul');
// Add a click event listener to the burger menu icon
burgerMenuIcon.addEventListener('click', () => {
    // Toggle the 'active' class on the menu to show/hide it
    menu.classList.toggle('active');
});


// Get a reference to the button element by its ID
const clickMeButton = document.getElementById('clickMeButton');
// Add a click event listener to the button
clickMeButton.addEventListener('click', function () {
    // This function will be executed when the button is clicked
    alert('Button Clicked!');


    // Get a reference to the empty div element by its id
    const messageDiv = document.getElementById('messageDiv');

    // Create a new text node with the message
    const messageText = document.createTextNode('Hello, JavaScript!');

    // Append the text node to the div element
    messageDiv.appendChild(messageText);
});

// // Get a reference to the button element by ID "changeColor" 
// const changeColor = document.getElementById('changeColor');
// // Add a click event listener to the button "changeColor"
// changeColor.addEventListener('click', function () {

//     // Generate a random color code
//     const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

//     // Change the background color of the body
//     document.body.style.backgroundColor = randomColor;

//     // Display the color code
//     colorDisplay.textContent = "Color: " + randomColor;

// });
// Function to generate a random color


function generateRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Get a reference to the color display div
const colorDisplay = document.getElementById('colorDisplay');

// Function to update the color display
function updateColorDisplay() {
    const randomColor = generateRandomColor();
    colorDisplay.style.backgroundColor = randomColor;
}

// Initial update
updateColorDisplay();

// Set an interval to update the color every second (1000 milliseconds)
setInterval(updateColorDisplay, 1000);
