/* 
================================================================
    Title: Logan-palindrome.js
    Author: Carl Logan
    Date: 8/15/2022
    Description: JavaScript for Logan-palindrome.html.
================================================================
*/

// get the current date in local format
function getTodaysDate() {
  return new Date().toLocaleDateString();
}

// get the length of the input string
function getLength(word) {
  return word.length;
}

// split, reverse and join the input string
function reverse(word) {
  return word.split("").reverse().join("");
}

// check if the reverse word matches the input string to determine a match
function  isPalindrome(word) {
  // if true the reversed word is equivalent to the input then return true
  if(reverse(word) === word) return true;
  // if true the reversed word is not equivalent to the input then return false
  return false;
}

// onclick event to trigger the arrow function
document.getElementById("btnCheckPhrase").onclick = () => {
  
  // capture certain DOM elements for later use
  const txtPhrase = document.getElementById("txtPhrase").value;
  const assignResults = document.getElementById("assign-results");
  const assignResultsHeader = document.getElementById("assign-results-header");

  // store the values from the above functions in variables
  const today = getTodaysDate();
  const len = getLength(txtPhrase);
  const reversedPhrase = reverse(txtPhrase);

  // build the string to display in assign-results-header div
  let header = `Date: ${today} <br>
                Original Phrase: ${txtPhrase} <br>
                Reversed Phrase: ${reversedPhrase} <br>
                Phrase Length: ${len}`;
  
  // modify the assign-results-header div to display the header string
  assignResultsHeader.innerHTML = header;

  // check the input string to determine the message to display
  if(isPalindrome(txtPhrase)) 
  // display this message if true
  return assignResults.innerHTML = `${txtPhrase} <b><u>is</u></b> a palindrome!`;
  // display this message if false
  return assignResults.innerHTML = `${txtPhrase} <b><u>is not</u></b> a palindrome!`;
}

