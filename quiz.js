// Function to check the user's answer and provide feedback
function checkAnswer() {
    // Correct answer for the quiz
    const correctAnswer = "4";
    
    // Get the user's selected answer using querySelector
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer is selected
    if (userAnswer.value === correctAnswer) {
        // Compare user's answer with the correct an
            // Display correct feedback
            document.getElementById('feedback').textContent = "Correct! Well done.";
     } else {
            // Display incorrect feedback
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
}

// Add event listener to the Submit Answer button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

