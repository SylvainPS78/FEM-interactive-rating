const notationButtons = document.querySelectorAll(".notation");
const submitButton = document.getElementById("submit-button");
const ratingPage = document.getElementById("rating-page");
const thanksPage = document.getElementById("thanks-page");
const output = document.querySelector("output");

let rating = "";

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
        rating = button.value;
        output.textContent = `You selected ${rating} out of 5`;
        console.log(rating);
    });
});

submitButton.addEventListener("click", ()=>{
    if (rating === ""){return};
    ratingPage.style.display = "none";
    thanksPage.style.display = "flex";
})