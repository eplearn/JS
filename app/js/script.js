'use strict'

// задача 1
// Реализуйте функцию sum(...args), которая суммирует все свои аргументы, пятью разными способами.

/* чтобы не комментировать каждый предыдущий вариант реализации функции,
всем им будут соответствовать уникальные наименования: sum1, sum2, sum3, sum4, sum5. */

// 1.1 Цикл for
function sum1(...args) {
    let result = 0;
    for (let i = 0; i<args.length; i++) {
        result = result + args[i];
    }
    return result;
}
// проверка
// console.log('sum1: ', sum1(1,2,3), ' ', sum1(0), ' ', sum1(), ' ', sum1(1,-1,1), ' ', sum1(10,-1,-1,-1));

// 1.2 Цикл for..of
function sum2(...args) {
    let result = 0;
    for (let arg of args) {
        result = result + arg;
    }
    return result;
}
// проверка
// console.log('sum2: ', sum2(1,2,3), ' ', sum2(0), ' ', sum2(), ' ', sum2(1,-1,1), ' ', sum2(10,-1,-1,-1));

// 1.3 Цикл while
function sum3(...args) {
    let result = 0;
    let count = 0;
    while (count !== args.length) {
        result = result + args[count||0];
        count++;
    }
    return result;
}
// проверка
// console.log('sum3: ', sum3(1,2,3), ' ', sum3(0), ' ', sum3(), ' ', sum3(1,-1,1), ' ', sum3(10,-1,-1,-1));

// 1.4 Цикл do while
function sum4(...args) {
    let result = 0;
    let count = 0;
    do {
        result = result + (args[count]||0);
        count++;
    }
    while (count < args.length);
    return result;
}
// проверка
// console.log('sum4: ', sum4(1,2,3), ' ', sum4(0), ' ', sum4(), ' ', sum4(1,-1,1), ' ', sum4(10,-1,-1,-1));

// 1.5 Метод Array.prototype.reduce()
function sum5(...args) {
    if (args.length !== 0) {
    return args.reduce((accumulator, current) => {
        return accumulator + current;
    });
    }
    else return 0;
}
// проверка
// console.log('sum5: ', sum5(1,2,3), ' ', sum5(0), ' ', sum5(), ' ', sum5(1,-1,1), ' ', sum5(10,-1,-1,-1));


// задача 2
// Найдите максимальный элемент в двумерном массиве.

const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
/*
С помощью Math.max() находим наибольшее число среди массива,
полученного в результате "склейки" подмассивов исходного двумерного array.
*/
function max(...args) {
    return Math.max(...array.reduce((accumulator, current) => {
        return accumulator.concat(current);
    }));
}
/*
Метод Math.max() возвращает наибольшее из нуля или более чисел.
Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван,
соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
*/
// проверка
// console.log(max(array));


// задача 3
/*
При помощи цикла for..in перебрать объект-справочник с датами рождения и смерти людей
и вернуть справочник с продолжительностью их жизни.
*/
const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
  };
function ages(persones) {
    let ages = {};
    for (let key in persons) {
    ages[key] = persons[key].died - persons[key].born;
    }
    return ages;
}
// проверка
// console.log(ages(persons));


// задача 4
// Реализуйте функцию removeElement(array, item) для удаления элемента item из массива array.

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7];
const arrayOfCities = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
function removeElement(array, item) {
    if (array.length !== 0) {
        for (let i = 0; i< array.length; i++) {
            if (array[i] === item) {
                array.splice(i, 1);
            }
        }
    }
}
// проверка
/* console.log('было: ');
console.log(arrayOfNumbers +  '\n' + arrayOfCities);
console.log('\n');
removeElement(arrayOfNumbers, 5);
removeElement(arrayOfCities, 'Lima');
removeElement(arrayOfCities, 'Berlin');
console.log('стало: ');
console.log(arrayOfNumbers + '\n' + arrayOfCities);
console.log('\n'); */


// задача 5
// Улучшите функцию из предыдущего задания для удаления нескольких элементов из массива removeElements(array, item1, ... itemN).

function removeElements(array, ...items) {
    if (array.length !== 0 && items.length !== 0) {
        for (let i = 0; i< array.length; i++) {
            for (let j = 0; j< items.length; j++) {
                if (array[i] === items[j]) {
                    array.splice(i, 1);
                }
            }
        }
    }
}
// проверка
/* console.log('было: ');
console.log(arrayOfNumbers +  '\n' + arrayOfCities);
console.log('\n');
removeElements(arrayOfNumbers, 5, 1, 6);
removeElements(arrayOfCities, 'Lima', 'Berlin', 'Kiev');
console.log('стало: ');
console.log(arrayOfNumbers + '\n' + arrayOfCities);
console.log('\n'); */
