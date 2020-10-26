
let maximum = parseInt(prompt("Enter your max number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high. Guess again!");
    } else {
        guess = prompt("Too low. Guess again!");
    }
}
if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log(`You got it! It took you ${attempts} guesses!`);
}



