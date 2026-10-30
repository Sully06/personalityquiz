console.log("script.js connected!");

let selectedAnswers = {};

const questions = document.querySelectorAll(".question-block");

questions.forEach((question, index) => {
    const buttons = question.querySelectorAll(".answer-btn");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {

            buttons.forEach((btn) => {
                btn.classList.remove("selected", "btn-primary");
                btn.classList.add("btn-outline-primary");
            });

            button.classList.add("selected", "btn-primary");
            button.classList.remove("btn-outline-primary");

            selectedAnswers[index] = button.dataset.answer;

            console.log(selectedAnswers);
        });
    });
});


function displayResult() {
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");

    resultContainer.style.display = "block";

    // this will hacve to make sure all questions are answered
    if (Object.keys(selectedAnswers).length < questions.length) {
        resultText.textContent = "Please answer all 3 questions first!";
        return;
    }

    let rockPoints = 0;
    let popPoints = 0;

    // Count the answers
    Object.values(selectedAnswers).forEach((answer) => {
        if (answer === "rock") {
            rockPoints++;
        } else if (answer === "pop") {
            popPoints++;
        }
    });

    // this will display the winning music genre
    if (rockPoints > popPoints) {
        resultText.textContent = "You are Rock! You are bold and adventurous!";
    } else {
        resultText.textContent = "You are Pop! You are cheerful and outgoing!";
    }
}

// Start running the function when Show Results is clicked
document.getElementById("show-result").addEventListener("click", displayResult);
