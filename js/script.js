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
