// For the current year
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;



// For the last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

// Store the selected elements. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the  button and use a callback function that toggles the list element's list of classes.
button.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	button.classList.toggle('show');
});