

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


 

/*form validation*/

function validateForm() {
    const firstName = document.getElementById('user-n').value;
    const lastName = document.getElementById('user-ln').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const maleGender = document.getElementById('male');
    const femaleGender = document.getElementById('female');

    if (firstName === '' || lastName === '' || email === '' || password === '') {
        alert('All fields are required');
        return false;
    }

    if (!maleGender.checked && !femaleGender.checked) {
        alert('Please select your gender');
        return false;
    }

    return true;
}

/*form validation*/