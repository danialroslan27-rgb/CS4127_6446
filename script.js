//Mobile Navigation Menu 

//Get the hamburger button and navigation links form the Html
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

//Checks that both elements exist before adding the click event
if (menuToggle && navLinks) {
    //Open or close the navigation menu when the button is clicked
    menuToggle.addEventListener("click", function () {
        //Add or remove the active class to show or hide the menu 
        navLinks.classList.toggle("active");
////Check whether the navigation menu is currently open
        const isOpen = navLinks.classList.contains("active");
//Update the button's accessibility state and appearance
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";
//Change the label depending on whether the menu is open or closed
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"

        );
    });
}

//Dark and Light mode 
const themeToggle =document.getElementById("themeToggle");
//Check whether dark mode was previously saved in localstorage
if(localStorage.getItem("theme") === "dark") {
    //Apply dark mode when the page loads
    document.body.classList.add("dark-mode");
}
//Check that the theme button exists before adding the click event 
if(themeToggle) {
//Check the current theme and update the button text
    const isDark= document.body.classList.contains("dark-mode");
     themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode"
//Change the theme when the button is cliked
    themeToggle.addEventListener("click",function() {
        //Add or remove the dark-mode class from the body 
        document.body.classList.toggle("dark-mode");
//Check which theme is currently active
        const isDark = document.body.classList.contains("dark-mode");
//Update the button text to show the opposite theme
        themeToggle.textContent = isDark ? "Light mode" : "Dark Mode";
//Save the selected theme so it remains after changing page
        localStorage.setItem("theme", isDark ? "dark": "light");
        
    });
}

// Interactive Attraction Image Gallery

//Select all images that can be clicked to open the popup
const galleryImages = document.querySelectorAll(".gallery-image");
//Get the popup elements form the HTML
const imagePopup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");
const popupCaption = document.getElementById("popupCaption");
const closePopup = document.getElementById("closePopup");

// Add a click event to every gallery image
galleryImages.forEach(function(image) {
//Open the popup when an image is cliked
    image.addEventListener("click", function() {
//Display the image popup
        imagePopup.classList.add("active");
//Copy the cliked image's source and alternative text
        popupImage.src = image.src;
        popupImage.alt = image.alt;
//Display the image description below the popup image
        popupCaption.textContent = image.alt;
//Update the accessibility state to show that the popup is open 
        imagePopup.setAttribute("aria-hidden", "false");

    });

});

//Check that the close button and popup exist 
if (closePopup && imagePopup) {
//Close the popup when the close button is clicked
    closePopup.addEventListener("click", function() {
//Hide the popup
        imagePopup.classList.remove("active");
//Update the accessibility state
        imagePopup.setAttribute("aria-hidden", "true");

    });
}
//Close the popup when the user clicks the background 
imagePopup.addEventListener("click",function(event) {
//Check whether the background itself was clicked 
    if(event.target === imagePopup) {
//Hide the popup
        imagePopup.classList.remove("active");
//Update the accessibility state
        imagePopup.setAttribute("aria-hidden","true");
    }
})