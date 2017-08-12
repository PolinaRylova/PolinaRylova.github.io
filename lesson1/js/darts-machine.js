var victoryPoints = 100;
var score;
var points = 0;
var misses = 0;

while (true) {
    if (misses >= 3) {
        break;
    }

    score = keks.getScore();

    if (score < 0) {
        console.log('Промах!');
        misses++;
        continue;
    }

    console.log('Результат броска: ' + score);

    points += score;
    if (points >= victoryPoints) {
        break;
    }
}

if (points >= victoryPoints) {
    console.log('Победа! Очков: ' + points + ', промахов: ' + misses);
}else {
    console.log('Проигрыш. Очков: ' + points + ', промахов: ' + misses)
}
