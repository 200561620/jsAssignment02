// Constants for selecting elements from the HTML document
const myStudentId = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");

// Function to change background color based on user input and display student ID
function changeCustomColor() {
    // Get user input and convert it to an integer
    const userInput = parseInt(customNumberInput.value);

    // Set background color based on user input conditions
    if (userInput < 0 || userInput > 100) {
        document.body.style.backgroundColor = "red";
    } else if (userInput >= 0 && userInput <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (userInput > 20 && userInput <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (userInput > 40 && userInput <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (userInput > 60 && userInput <= 80) {
        document.body.style.backgroundColor = "purple";
    } else {
        document.body.style.backgroundColor = "yellow";
    }

    // Display student ID in the HTML document
    myStudentId.textContent = "My Student ID: 200561620";
}

// Function to change background color with a random number
function changeRandomColor() {
    // Generate a random number between 1 and 100
    const randomInput = Math.floor(Math.random() * 100) + 1;

    // Set the random number as the user input and trigger color change
    customNumberInput.value = randomInput;
    changeCustomColor();
}

// Function to generate options for the image selection list
function addList() {
    // Array of image options
    const imgOptions = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

    // Loop through the image options to create select list options
    for (let i = 0; i < imgOptions.length; i++) {
        const option = document.createElement("option");
        option.value = imgOptions[i];
        option.text = imgOptions[i];
        imageSelect.appendChild(option);
    }
}

// Function to change displayed image based on the selected option
function changeImage() {
    // Get the selected image option and set the source of the image element
    const selectedImage = imageSelect.value;
    images.src = `img/${selectedImage}`;
}

// Event listeners for button clicks and select list changes
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);

// Initialize the select list with image options
addList();
