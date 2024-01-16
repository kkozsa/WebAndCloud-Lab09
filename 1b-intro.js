
function checkAge(age) {
    if (age >= 17) {
        return "You are eligible to register";
    }
    else {
        return "Try again next year";
    }
}

const ageToCheck = 19;

const resultMessage = checkAge(ageToCheck);
console.log(resultMessage);