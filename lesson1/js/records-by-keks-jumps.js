/*
Мяу! Я провожу тренировки и хочу понять, пройду ли квалификацию.

В течение тренировки я делаю несколько прыжков,
и собираю длины прыжков в массив attempts.

Квалификационное значение хранится в переменной qualificationDistance.

Программа должна выбрать три лучших прыжка, а затем посчитать среднее значение
этих трёх прыжков и записать его в переменную averageBest.

Если среднее от лучших трёх прыжков больше квалификационного значения,
то я прошёл квалификацию и переменная qualified должна содержать true.
Если квалификация не пройдена, то в qualified должно быть false.
*/
var qualificationDistance = 200;
var attempts = [120, 150, 160, 201, 203, 180, 202];
var qualified = false;
var averageBest = 0;

for (var i = 0; i <= attempts.length - 2; i++) {
    var minValue = attempts[i];

    for (var j = i + 1; j <= attempts.length - 1; j++) {
        if (attempts[j] < minValue) {
            minValue = attempts[j];
            var swap = attempts[i];
            attempts[i] = minValue;
            attempts[j] = swap;
        }
    }
}
console.log(attempts);

var averageBest = (attempts[attempts.length - 1] + attempts[attempts.length - 2] + attempts[attempts.length - 3]) / 3;

if (averageBest > qualificationDistance) {
    qualified = true;
} else {
    qualified = false;
}