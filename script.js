//Antonette Petallo, 000900501

//Group 1 - Problem 1
function group_1_choice_1() {
    let input = document.getElementById("q1_input").value;
    let output = document.getElementById("q1_output");
    if (!isNaN(input)) {
        input = parseFloat(input);
        if (input === 0 || (input >= 13 && input <= 17)) {
            output.value = "In range";
        } else {
            output.value = "Out of range";
        }
    } else {
        output.value = "Not a number";
    }
}

//Group 1 - Problem 2
function group_1_choice_2() {
    let input = document.getElementById("q2_input").value;
    let output = document.getElementById("q2_output");
    if (!isNaN(input) && input > 0) {
        input = parseFloat(input);
        const daysInYear = 365;
        const daysInMonth = 30;
        let years = Math.floor(input / daysInYear);
        input -= years * daysInYear;
        let months = Math.floor(input / daysInMonth);
        let days = input - (months * daysInMonth);
        output.value = `${years} years, ${months} months, and ${days.toFixed(2)} days`;
    } else {
        output.value = "Non-numeric or negative input";
    }
}

//Group 2 - Problem 1
function group_2_choice_1() {
    let input = document.getElementById("q3_input").value.toLowerCase();
    let output = document.getElementById("q3_output");
    if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u") {
        output.value = "A Vowel";
    } else if (input === "y") {
        output.value = "Sometimes";
    } else {
        output.value = "Not a vowel";
    }
}

//Group 2 - Problem 3
function group_2_choice_2() {
    let input = document.getElementById("q4_input").value;
    let output = document.getElementById("q4_output");
    let num = parseInt(input);
    if (!isNaN(num) && num > 0) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        output.value = factorial;
    } else {
        output.value = "Cannot compute factorial value";
    }
}

//Group 3 - Problem 1
function group_3_choice_1() {
    let input = document.getElementById("q6_input").value;
    let output = document.getElementById("q6_output");

    if (input.length < 10 || input.length > 20 || /[^01]/.test(input)) {
        output.value = 0;
        return;
    }
    let integerValue = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '1') {
            integerValue += Math.pow(2, i);
        }
    }
    output.value = integerValue;
}