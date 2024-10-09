// Function to check the user's answer and provide feedback
function checkAnswer() {
    // Correct answer for the quiz
    const correctAnswer = "4";
    
    // Get the user's selected answer using querySelector
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer is selected
    if (userAnswer) {
        // Define the selected answer's value as a variable
        const selectedValue = userAnswer.value; // Store the user's selected answer value

        // Compare the selected value with the correct answer
        let feedback; // Variable to hold feedback message
        
        if (selectedValue === correctAnswer) {
            // If the answer is correct
            feedback = "Correct! Well done.";
        } else {
            // If the answer is incorrect
            feedback = "That's incorrect. Try again!";
        }

        // Update the feedback element with the message
        document.getElementById('feedback').textContent = feedback;
    } else {
        // If no answer is selected, prompt the user to choose an option
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add event listener to the Submit Answer button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);


