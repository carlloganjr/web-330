/* 
================================================================
    Title: theme.js
    Author: Carl Logan
    Date: 8/13/2022
    Description: Typical theme script for all assignments.
================================================================
*/

// The first function called to set the default theme if no other is set
function setDefaultTheme() {

  // These variables capture elements from the DOM
  const bodyClass = document.body;
  const iconElement = document.getElementById("icon-mode");
  const iconText = document.getElementById("icon-text");

  // Used to set the local storage if no other values are found
  bodyClass.classList.value = localStorage.getItem("mode") || "light-theme";
  iconElement.classList.add(
    localStorage.getItem("iconMode") || "fa-toggle-off"
    );
  iconText.innerHTML = localStorage.getItem("iconText") || "Light Mode";

  
}

// set the them on the body
function setSelectedTheme() {
  document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}