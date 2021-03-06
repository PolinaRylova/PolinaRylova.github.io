/*
При сортировке элементы массива меняются местами.
Обычно это делается через промежуточную переменную,
в которую сохраняется один из переставляемых элементов.
Следующий шаг на пути к сортировке — поиск минимального элемента.
И этот элемент мы будем искать не во всём массиве, а в указанной его части.

Для этого заведём переменную currentIndex.
Она будет управлять начальным значением переменной цикла.
Почему начальное значение переменной цикла задано как currentIndex + 1?
Это нужно, чтобы искать минимальное значение после элемента с позицией currentIndex.

var currentIndex = 0;
// Минимальный элемент ищем начиная со второй позиции
// [4,   2, 1, 3]

var currentIndex = 1;
// Минимальный элемент ищем начиная с третьей позиции
// [4, 2,   1, 3]
Как найти минимальный элемент, расположенный, после первого?

Добавим переменную minValue для хранения минимального значения.
Предположим, что первый элемент и есть минимальный.
Поэтому до цикла сохраним в minValue значение первого элемента.
На каждой итерации цикла сравниваем текущий элемент со значением minValue.
Если текущий элемент меньше minValue, то записываем его в minValue.
Если первый элемент и был минимальный, то в цикле значение minValue не изменится,
если же после первого элемента были элементы с меньшим значением,
то это значение запишется в minValue в цикле.

В любом случае минимальный элемент будет найден.

Обратите внимание,
что этот алгоритм не будет работать на пустом массиве.
Чтобы алгоритм работал, нам нужен, как минимум один элемент,
чтобы обозначить его как минимальный до начала работы цикла.

var usersByDay = [4, 2, 1, 3];
console.log(usersByDay);

var currentIndex = 0;
var minValue = usersByDay[currentIndex];

for (var j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
  if (usersByDay[j] < minValue) {
    minValue = usersByDay[j];
    console.log('Новый минимальный элемент: ' + minValue);
  }
}

console.log('Минимальный элемент: ' + minValue);

Мы научились находить минимальное значение. Почему бы не сделать ещё шаг.

Теперь давайте не просто находить минимальное значение после первого элемента,
а записывать это значение на место первого элемента. Для этого нужно немного дополнить алгоритм:

Добавим переменную minValue для хранения минимального значения.
Предположим, что первый элемент и есть минимальный.
Поэтому до цикла сохраним в minValue значение первого элемента.
На каждой итерации цикла сравниваем текущий элемент со значением minValue.
Если текущий элемент меньше minValue, то записываем его в minValue,
а затем меняем местами значение первого элемента и текущего.
После завершения работы цикла на первой позиции массива окажется элемент с минимальным значением.
Все остальные элементы будут больше.

Задания пошагово:
1.Внутри условия после переменной minValue сохраните значение usersByDay[currentIndex] в переменную swap. Оставшийся код тоже пишите внутри условия.
2.Теперь в usersByDay[currentIndex] запишите минимальное значение.
3.Ниже запишите в usersByDay[j] значение переменной swap.
4.Выведите в консоль: 'Меняю местами ' + swap + ' и ' + minValue.
5.Выведите в консоль: 'Массив сейчас: ' + usersByDay.

var usersByDay = [4, 2, 1, 3];
console.log(usersByDay);

var currentIndex = 0;
var minValue = usersByDay[currentIndex];

for (var j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
  if (usersByDay[j] < minValue) {
    minValue = usersByDay[j];
    var swap = usersByDay[currentIndex];
    usersByDay[currentIndex] = minValue;
    usersByDay[j] = swap;
    console.log('Меняю местами ' + swap + ' и ' + minValue);
    console.log('Массив сейчас: ' + usersByDay);
  }
}

console.log('Минимальный элемент: ' + minValue);

Вы прошлись по всему массиву, нашли минимальный элемент
и поместили его на первое место.

Как продолжить сортировку? Очень просто.
Теперь нужно повторить всё то же самое со вторым элементом массива:
ищем минимальные элементы в оставшейся части массива и помещаем их на второе место.

После этого шага на первой позиции массива окажется самый маленький элемент,
на второй позиции — следующий по величине.
А на остальных позициях — элементы с более крупными значениями.

Затем нужно будет повторить эти же действия с третьим элементом.

После этого массив будет отсортирован полностью,
так как на первых трёх позициях по возрастанию будут размещены минимальные элементы,
а на четвёртой позиции автоматически останется максимальный элемент.

Реализуем эти шаги через вставку и копирование кода.
Единственное, что будет отличаться в разных кусках — это значение переменной currentIndex.

Однако, в такой реализации будет много повторяющегося кода,
в котором меняется только значение переменной currentIndex.

Как сделать структуру программы лучше?

Можно взять кусок кода с циклом,
который ищет и подставляет на указанное место минимальное значение,
и обернуть его в другой цикл.
И в этом верхнем, «родительском», цикле наращивать переменную currentIndex.

Учтите, что currentIndex должна изменяться не от нуля до длины массива,
а от нуля до длины массива, уменьшенной на единицу (ведь последний элемент автоматически будет максимальным).

Условие выхода из верхнего цикла давайте писать по аналогии с условием выхода из вложенного цикла:

// Цикл до предпоследнего элемента
currentIndex <= usersByDay.length - 2

// Цикл до последнего элемента
j <= usersByDay.length - 1
*/
var usersByDay = [4, 2, 1, 3];
console.log(usersByDay);

for (var currentIndex = 0; currentIndex <= usersByDay.length - 2; currentIndex++) {
    var minValue = usersByDay[currentIndex];

    for (var j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
        if (usersByDay[j] < minValue) {
            minValue = usersByDay[j];
            var swap = usersByDay[currentIndex];
            usersByDay[currentIndex] = minValue;
            usersByDay[j] = swap;
            console.log('Меняю местами ' + swap + ' и ' + minValue);
            console.log('Массив сейчас: ' + usersByDay);
        }
    }

    console.log('На позиции ' + currentIndex + ' находится минимальный элемент ' + minValue);
}