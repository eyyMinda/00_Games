function checkAnswer(number) {
    if (number == 1) {
        console.log("You picked Rock!");
    } else if (number == 2) {
        console.log("You picked Paper!");
    }
    else if (number == 3) {
        console.log("You picked Scissors!");
    }

    compChoice = Math.floor(Math.random() * 3) + 1;

    if (compChoice == 1) {
        console.log("Computer picked Rock!");
    } else if (compChoice == 2) {
        console.log("Computer picked Paper!");
    }
    else if (compChoice == 3) {
        console.log("Computer picked Scissors!");
    }
    
    if (number == compChoice) {
        alert("It's a Draw!")
    } else if (number == 1 && compChoice == 3 || number == 2 && compChoice == 1 || number == 3 && compChoice == 2) {
        alert("You Won!");
    }
    else if (number == 3 && compChoice == 1 || number == 1 && compChoice == 2 || number == 2 && compChoice == 3) {
        alert("You Lost :( ");
    }
}