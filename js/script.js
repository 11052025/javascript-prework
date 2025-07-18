// Funkcje do wyświetlania wiadomości
function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}

function printMessage(msg) {
  const messagesDiv = document.getElementById('messages');
  const p = document.createElement('p');
  p.innerText = msg;
  messagesDiv.appendChild(p);
}

// Funkcja zwracająca nazwę ruchu na podstawie id
function getMoveName(argMoveId) {
  if (argMoveId === 1) {
    return 'kamień';
  } else if (argMoveId === 2) {
    return 'papier';
  } else if (argMoveId === 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

// Funkcja wyświetlająca wynik gry
function displayResult(argPlayerMove, argComputerMove) {
  if (
    (argPlayerMove === 'papier' && argComputerMove === 'kamień') ||
    (argPlayerMove === 'nożyce' && argComputerMove === 'papier') ||
    (argPlayerMove === 'kamień' && argComputerMove === 'nożyce')
  ) {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove === argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }

  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

// Funkcja wywoływana po kliknięciu guzika
function buttonClicked(argPlayerMove) {
  clearMessages();
  console.log(argPlayerMove + ' został kliknięty');

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);

  displayResult(argPlayerMove, computerMove);
}

// Pobranie guzików po id (mogą się zmienić, ale raczej nie będą)
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

// Powiązanie guzików z funkcją buttonClicked
buttonRock.addEventListener('click', function () {
  buttonClicked('kamień');
});

buttonPaper.addEventListener('click', function () {
  buttonClicked('papier');
});

buttonScissors.addEventListener('click', function () {
  buttonClicked('nożyce');
});



