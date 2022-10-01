const ratingContainer = document.querySelector(".rating");
const thanksContainer = document.querySelector(".thank-you");
const submit = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("number");
const rates = document.querySelectorAll(".btn");

submit.addEventListener("click", e => {
    console.log(e.target);
    thanksContainer.style.display = "block";
    ratingContainer.style.display = "none";
})

rateAgain.addEventListener("click", e => {
    thanksContainer.style.display = "none";
    ratingContainer.style.display = "block";
})

rates.forEach(rate => {
    rate.addEventListener("click", () => {
        console.log(rate.textContent);
        rating.innerText = rate.textContent;
    })
})
