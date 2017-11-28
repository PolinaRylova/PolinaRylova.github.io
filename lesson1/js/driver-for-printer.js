/* задание из курса "Циклы" HTML Academy */
var mode = 'alternate';  // Режим работы драйвера печати для вывода четных/нечетных
// pageCopy для вывода копий одной сираницы
// document для вывода всех страниц документа
// reverse для вывода всех страниц в обратном порядке
var pageNumber = 5;    // Номер копируемой страницы
var count = 7;         // Количество копий
var totalPages = 6;    // Всего страниц в документе
var startPage = 2;     // Стартовая страница
// Для вывода нечетных страниц, сменить startPage на 1

if (mode === 'pageCopy') {
    for (var i = 0; i < count; i++) {
        keks.print(pageNumber);
    }
}

if (mode === 'document') {
    for (var page = 1; page <= totalPages; page++) {
        keks.print(page);
    }
}

if (mode === 'reverse') {
    for (var reversePage = totalPages; reversePage >= 1; reversePage--) {
        keks.print(reversePage);
    }
}

if (mode === 'alternate') {
    for (var alternatePage = startPage; alternatePage <= totalPages; alternatePage += 2) {
        keks.print(alternatePage);
    }
}