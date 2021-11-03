// Get value from input
function getValues() {
    document.getElementById("alert").classList.add("invisible");
    // get user string from the page
    let userString = document.getElementById("inputValue").value;

    // check for a Palindrome
    let returnObj = checkForPalindrome(userString);

    // Display results to the page
    displayMessage(returnObj);
}

// Check for a Palindrome
function checkForPalindrome(userString) {
    // Convert to LowerCase
    userString = userString.toLowerCase();

    // Remove Spaces and Special Characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    let revString = [];
    let returnObj = {};

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    if (revString == userString) {
        returnObj.msg = "Well Done! You entered a palindrome!"
    } else {
        returnObj.msg = "Sorry! You did not enter a palindrome!"
    }
    
    returnObj.reversed = revString;

    return returnObj;
}


// Display results to the page
function displayMessage(returnObj) {
    document.getElementById("alertHeader").innerHTML = returnObj.msg;

    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;

    document.getElementById("alert").classList.remove("invisible");
}