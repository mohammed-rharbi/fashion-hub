

/*burger-menu*/

const berger = document.querySelector(".burger");
const nivo = document.querySelector(".nivo");


berger.addEventListener("click", () => {
     berger.classList.toggle("active");
     nivo.classList.toggle("active");
})

/*burger-menu*/




/*FAQ*/

function toggleAnswer(question) {
    const answer = question.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}

/*FAQ*/
