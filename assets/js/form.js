// Below is the javascript for the form functionality.

// 1. Adds event listener to the blogForm that listens for the submit event.
// 2. The function get called when the submit event occurs .
// 3. handleFormSubmission function to display errror messages if the form submission fails or the user doesnt enter any value in the field. 
document.getElementById('blogForm').addEventListener('submit', function (e) {
    handleFormSubmission(e, document.getElementById('errorMessage'));
});
