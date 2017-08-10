/*
KeksoFit v 0.1
by @keks
License: CatoFree, NoDogs
*/

/*
Вес корма храним в переменной foodInGrams, а время сна в переменной sleepInHours.
В обе переменные будем записывать целые числа.

За каждые 10 грамм корма, которые я съел, я получаю 3 прыжка.
Например: за 50 грамм корма я должен сделать 15 прыжков.
Прыжки храним в переменной jumps.

За каждый час сна — 2 подтягивания.
Например: я поспал 5 часов и должен подтянуться 10 раз.
Подтягивания храним в переменной pulls.

Каждый прыжок дополняется одним кругом пробежки, а каждое подтягивание — половиной круга.
Например: 20 кругов по комнате даётся за 15 прыжков и 10 подтягиваний.
Круги храним в переменной runs.
*/

var foodInGrams = parseInt(prompt('Сколько вы отведали яств в граммах, господин?'), 10);
var sleepInHours = parseInt(prompt('Сколько часов вы почивали, господин?'), 10);

var jumps = foodInGrams / 10 * 3;
var pulls = sleepInHours * 2;
var runs = jumps + pulls / 2;

console.log('jumps - ' + jumps + 'pulls - ' + pulls + 'runs - ' + runs);

prompt('Исходя из количества отведанного и длительности почивания, Вам, господин, необходима следующая физическая нагрузка: прыжков - ' + jumps + ', подтягиваний - ' + pulls + ', кругов пробежки - ' + runs);