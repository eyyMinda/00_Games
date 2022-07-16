function checkAnswer(number) {
    switch (number) {
        case 1: console.log("You picked Rock!"); break;
        case 2: console.log("You picked Paper!"); break;
        case 3: console.log("You picked Scissors!"); break;
    }

    compChoice = Math.floor(Math.random() * 3) + 1;
    switch (compChoice) {
        case 1: console.log("Computer picked Rock!"); break;
        case 2: console.log("Computer picked Paper!"); break;
        case 3: console.log("Computer picked Scissors!"); break;
    }

    if (number == compChoice) { alert("It's a Draw! 😉 ") }
    if (number == 1 && compChoice == 3 || number == 2 && compChoice == 1 || number == 3 && compChoice == 2) { alert("You Won! 😁 "); }
    if (number == 3 && compChoice == 1 || number == 1 && compChoice == 2 || number == 2 && compChoice == 3) { alert("You Lost 😣 "); }
}