const notationButtons = document.querySelectorAll(".notation");
const submitButton = document.getElementById("submit-button");
const ratingPage = document.getElementById("rating-page");
const thanksPage = document.getElementById("thanks-page");
const resultOutput = document.getElementById("rating-result");

let selectedRating = "";

const handleSubmit = (e) => {
    e.preventDefault();
}

notationButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        handleSubmit(e);
        notationButtons.forEach(button => {
            button.classList.remove("selected");
        });
        button.classList.add("selected");
        selectedRating = button.value;
        resultOutput.textContent = `You selected ${selectedRating} out of 5`;
    });
});

submitButton.addEventListener("click", (e)=>{
    handleSubmit(e);
    if (selectedRating === ""){return};
    ratingPage.style.display = "none";
    thanksPage.style.display = "flex";
})