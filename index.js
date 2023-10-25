

const burger = document.querySelector(".burger");
const nivo = document.querySelector(".nivo");


burger.addEventListener("click", () => {
    burger.classList.toggle("active");
     nivo.classList.toggle("active");
})













function toggleAnswer(question) {
    const answer = question.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}

