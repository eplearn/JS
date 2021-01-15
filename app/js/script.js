'use strict';


// задача 1 Идентификаторы
/*
Объявите переменную и запишите в нее свое имя как литерал строки.
Объявите константу и запишите в нее год своего рождения как литерал числа.
Создайте функцию, которая печатает приветствие и имеет один аргумент: name.
*/
let name = 'Ivan';
const B_DATE = 1980;
function greatings(name) {
    console.log(name);
}
// проверка
// greatings(name);


//задача 2 Циклы
/*
2.1
Реализуйте функцию range(start: number, end: number): array которая отдает массив чисел из диапазона [15, 30] включая крайние числа.
*/
function range(start, end) {
    let result = [];
    for(let i = start; i<=end; i++) {
        result[i-start] = i;
    }
    return result;
}
// проверка
// console.log(array = range(15,30));

/*
2.2
Реализуйте функцию rangeOdd(start: number, end: number): array которая отдает массив нечетных чисел из диапазона [15, 30] включая крайние числа.
*/
function rangeOdd(start, end) {
    // обявление массива, который возвращает данная функция
    let result = [];
    // поправка индексирования возвращаемого массива предназначена для того, что он содержал только требуемые значения
    let correction = 0;
    for(let i = start; i <= end; i++) {
        // проверка числа из отрезка [start, end] на нечетность
        if (i%2!==0) {
            result[i-start+correction] = i;
        }
        // если число из отрезка [start, end] четно, значение поправки снижается на единицу.
        else {
            correction--;
        }
    }
    return result;
}
// проверка
/* let array = rangeOdd(15,30);
console.log(array.length, array); */



//задача 3 Функции
/*
3.1
Реализуйте функцию average с сигнатурой average(a: number, b: number): number вычисляющую среднее арифметическое своих аргументов.
*/
function average (a,b) {
    return (a+b)/2;
}
// проверка
// console.log(average(10,10));

/*
3.2
Реализуйте функцию square с сигнатурой square(x: number): number вычисляющую квадрат своего аргумента.
*/
function square (x) {
    return x**2;
}
// проверка
// console.log(square(2));

/*
3.3
Реализуйте функцию cube с сигнатурой cube(x: number): number вычисляющую куб своего аргумента.
*/
function cube (x) {
    return x**3;
}
// проверка
// console.log(cube(2));

/*
3.4
Вызовите функции square и cube в цикле от 0 до 9, вычисляя, соответственно квадрат и куб от переменной цикла. Передайте квадрат и куб на каждой итерации в функцию average. Результаты сложите в массив и возвратите из функции calculate.
*/
function calculate () {
    let result = [];
    for (let i=0; i<9; i++) {
        result[i] = average(square(i),cube(i));
    }
    return result;
}
// проверка
// console.log(calculate());


/*
задача 4 Объекты
*/
// 4.1
const fn = null;
let userVrbl = {
    name: 'John',
};
let userConst = {
    name: 'Jake',
};
userVrbl.name = 'Tommy';
userConst.name = 'Tonny';
let vrbl = userVrbl.name;
vrbl = 'Ventseslav';
const constant = userConst.name;
// constant = 'G'; TypeError: Assignment to constant variable.
// проверка
// console.log(vrbl);
// console.log(constant);

/* 4.2
Реализуйте функцию createUser с сигнатурой createUser(name: string, city: string): object.
Пример вызова: createUser('Marcus Aurelius', 'Roma') функция должна вернуть объект
{ name: 'Marcus Aurelius', city: 'Roma' }
*/
function createUser(name, city) {
    return {
        name: name,
        city: city,
    };
}
// проверка
// console.log(createUser('Marcus Aurelius', 'Roma'));


//задача 5 Коллекции

/* 5.1
Реализуйте телефонную книгу на массиве объектов.
*/

// Объявите массив объектов с двумя полями: name и phone для хранения телефонной книги и добавьте несколько объектов в массив.
let n = 3; // количество пользователей
// создадим объекты в цикле, значения полей объектов составим исходя из значений переменной итерирования этого цикла
const initialName = 'Marcus Aurelius';
const initialPhoneNumber = '+380445554433';
let users = [n];
function buildUser(name, phone) {
    return {
        name: name,
        phone: phone,
    };
}
for (let i = 0; i < n; i++) {
    users[i] = buildUser(initialName+' '+i, initialPhoneNumber+' '+i)
}
// проверка
// console.log(users);

/* Реализуйте функцию findPhoneByName с сигнатурой findPhoneByName(name: string): string.
При вызове функция должна находить объект, где поле name равно аргументу name и возвращать номер телефона из объекта. */

/* сигнатура findPhoneByName(name: string): string совпадаает с вариантом в 5.2, поэтому код закомментирован
function findPhoneByName(name) {
    for (let i = 0; i< users.length; i++) {
        if (users[i].name===name) {
            return users[i].phone;
        }
        else return 'no such name';
    }
} */
// проверка
// console.log(findPhoneByName('Marcus Aurelius 1'));


/*  5.2
Реализуйте телефонную книгу на хеш-таблицах, т.е. справочниках (объектах).
*/

//Задайте справочник (объект) с ключами равными значениям поля name (из предыдущего примера) и значениями равными полю phone.
let phoneBook = {
    'Marcus Aurelius 0': '+380445554433 0',
    'Marcus Aurelius 1': '+380445554433 1',
    'Marcus Aurelius 2': '+380445554433 2',
}
// проверка
// console.log(phoneBook);

/* Реализуйте функцию findPhoneByName с сигнатурой findPhoneByName(name: string): string
которая находит телефон в хеше по имени и возвращает номер телефона. Используйте hash[key] для поиска телефона. */

function findPhoneByName(name) {
    if ((phoneBook[name]!== null)&(phoneBook[name]!== undefined)) {
    return phoneBook[name];
    }
    else return 'no such name';
}
// проверка
// console.log(findPhoneByName('Marcus Aurelius 1'));
