var position, ladders, finalNumbers, i, calculateDice, logResult, rollTheDice, dice, k, j, snake, ladder, printResult, counter;

position = 1;
ladders = [25, 55];
finalNumbers = [[94, 6], [95, 5], [96, 4], [97, 3], [98, 2], [99, 1]];
i = 0;

calculateDice = function() {
  dice = Math.floor(Math.random()*6 + 1);
}

logResult = function (special) {
  console.log(dice+"-"+special+position);
}

rollTheDice = function () {
  dice = 0;
  calculateDice();

  for (k = 0; k < finalNumbers.length; k++) {
    if (position === finalNumbers[k][0] && dice !== finalNumbers[k][1]) {
      calculateDice();
      logResult("");
      return;
    }
  }

  position += dice;

  if (position % 9 === 0) {
    snake = true;
    position -= 3;
  }

  for (j = 0; j < ladders.length; j++) {
    if (position === ladders[j]) {
      ladder = true;
      position += 10;
    }
  }

  return position;
}

printResult = function (position) {
  if (position <= 100) {
    if (snake) {
      logResult("snake");
      snake = false;
    }

    else if (ladder) {
      logResult("ladder");
      ladder = false;
    }

    else { 
      logResult("");
    }
  }
}

counter = function () {
  printResult(rollTheDice());
  ++i;
  if (i<100) {
    setTimeout(counter, 1000);
  }
}

counter();