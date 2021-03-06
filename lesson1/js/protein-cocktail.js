/*
Мяу! Программа должна считать количество протеина необходимое на период.

Во-первых, расчёт всегда начинается с понедельника. Это первый день.

Во-вторых, я принимаю протеин каждый третий день:
1 день, понедельник — нет,
2 день, вторник — нет,
3 день, среда — да,
4 день, четверг — нет,
5 день, пятница — нет,
6 день, суббота — да,
7 день, воскресенье — нет,
8 день, понедельник — нет,
9 день, вторник — да
и так далее.

В-третьих, известно, сколько протеина я съедаю в будние и сколько в выходные дни.

В-четвёртых, период задаётся целым числом, от одного до бесконечности (хотя планы дальше чем на месяц я обычно не строю).

Программа должна возвращать общее количество протеина за период, записанное в переменную total.

Количество дней хранится в переменной days,
количество протеина для буднего дня — в переменной workDayAmount, для выходного — в переменной weekendAmount,
период получения протеина — в переменной period, а результат необходимо записать в переменную total.

Конечно, в этой программе будет удобно использовать цикл, в котором будет накапливаться количество протеина.

В этом цикле будут две сложные проверки: как определить n-ый по счёту день и как отделить выходные от будних.
*/

var days = 9;            // Дней в периоде
var period = 3;          // Как часто я ем протеин (раз в три дня)
var workDayAmount = 200; // Количество протеина в будние
var weekendAmount = 100; // Количество протеина в выходные
var total = 0;

for (var i = 1; i <= days; i++) {
    if (i % period === 0) {
        if (i % 7 === 6 || i % 7 === 0) {
            total += weekendAmount;
        } else {
            total += workDayAmount;
        }
    }
}