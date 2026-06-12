var userChoiceInput = document.getElementById('userChoice');
var userNumberInput = document.getElementById('userNumber');
var playBtn = document.getElementById('playBtn');
var resetBtn = document.getElementById('resetBtn');
var gameArea = document.getElementById('gameArea');

playBtn.addEventListener('click', function() {
    var userChoice = userChoiceInput.value; 
    var userText = userNumberInput.value.trim();

    if (userText === '') {
        alert('Opa! Digite um número para jogar!');
        return;
    }

    var userNumber = parseInt(userText);

    var machineNumber = Math.floor(Math.random() * 10 ) +1;

    var sum = userNumber + machineNumber;
    
    let sumResult;
    if (sum % 2 === 0) {
        sumResult = 'par';
    } else {
        sumResult = 'impar';
    }

    let isUserWinner = false;
    if (userChoice === sumResult) {
        isUserWinner = true;
    }

    let message = "         RESULTADO         \n";
    message += "--> VOCÊ escolheu: " + userChoice.toUpperCase() + "!\n";
    message += "> E jogou o número: " + userNumber + ".\n\n";
    message += "--> A MÁQUINA jogou o número: " + machineNumber + ".\n";
    message += "> A soma deu: " + sum + ".\n";
    message += "> Que é: " + sumResult.toUpperCase() + "!\n\n";


    if (isUserWinner) {
        message += "🎉 PARABÉNS! VOCÊ GANHOU!!!!!";
    } else {
        message += "🤖 A MÁQUINA ganhou essa. Tente novamente!";
    }

    alert(message);

    gameArea.style.display = 'none';
    resetBtn.style.display = 'block';
});

resetBtn.addEventListener('click', function() {
    userNumberInput.value = '';
    gameArea.style.display = 'block';
    resetBtn.style.display = 'none';
});