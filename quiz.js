// Function to check the user's answer and provide feedback
function checkAnswer() {
    // Correct answer for the quiz
    const correctAnswer = "4";
    
    // Get the user's selected answer using querySelector
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer is selected
    if (userAnswer) {
        // Compare user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            // Display correct feedback
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            // Display incorrect feedback
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, prompt the user to choose an option
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add event listener to the Submit Answer button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);