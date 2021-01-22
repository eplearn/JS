'use strict';


// Object
// declaration 1
/*
const person1 = {};
person1.name = 'Marcus';
person1.city = 'Roma';
person1.born = 121;
*/
// declaration 2
/*
const person2 = new Object();
person2.name = 'Marcus';
person2.city = 'Roma';
person2.born = 121;
*/
// declaration 3
// const person3 = {
//     name: 'Marcus',
//     city: 'Roma',
//     born: 121,
// };

//console.dir({person1, person2, person3});

//console.log('Person name is: '+ person1.name);
//console.log('Person name is: '+ person1['name']);

// console.dir({person1});
// delete person1.name;
// console.dir({person1});

// const person4 = {
//     name: 'Marcus',
//     get city() {
//         return 'Roma';
//     }
//     set city (value) {
//         console.log('Marcus remains in Roma');
//     },
// };

// person4.city = 'Kiev';
// console.dir({person4});

// Properties
/*
const person = {
    name:  'Marcus',
    city: 'Roma',
    born: 121,
};
if ('name' in person) {
    console.log(person.name);
}

for(const key in person){
    const value = person[key];
    console.dir({key,value});
}
*/
// {}
/*
Const name = 'Marcus';
const city = 'Roma';
{
    const person5 = {name, city}; // объединение ключей и значений
    console.dir({person5});
}
*/

// dynamic fiels name
/*
{
    const fieldName = 'city';
    const fieldValue = 'Roma';
    const person6 = {
        name: 'Marcus',
        [fieldName]: fieldValue,
    };
    console.dir({person6});
}
*/
// вычисление в объекте
/*
{
    const prefix = 'city';
    const person7 = {
        name: 'Marcus',
        [prefix+'Born']: 'Roma', // expr in field
    };
    console.dir({person7});
}
*/
/*
{
    const fn = s => s+'Born';
    const person8 = {
        name: 'Marcus',
        [fn('city')]: 'Roma', // func in field
    };
    console.dir({person8});
}
*/

// Arrays
/*
const letters = [];
letters.push('B');
console.dir({letters});
letters.unshift('A');
console.dir({letters});
letters.push('C');
console.dir({letters});
*/
/*
const numbers = [1,2,3,];
numbers.push(4);
console.dir({numbers});
*/
/*
const lang = ['C', 'JS', 'Py', 'Java'];
console.dir({
    length: lang.length,
    'lang[0]': lang[0],
    'lang[lang.length-1]': lang[lang.length-1]
});
*/
/*
// сереализация (преобразование в строку)
const person = {
    name:'Marcus',
    city:'Roma',
    born:121
};
*/
// JS object notation = JSON
/*
const s = JSON.stringify(person); // JSON - глобальный объект, stringify - метод.
console.log(s); // => "name":"Marcus","city":"Roma","born":121

const obj = JSON.parse(s); // строку преобразовал в объект (но другой)
console.dir({obj});

console.log('person === obj is ', person===obj); // разные ссылки
*/
/*
const letters = ['A','B','C','D'];
console.log(letters);
console.log(letters.join('---')); // преобразование в строку с настраиваемым форматированием пробелов между элементами массива
console.log(letters.join('---').split('')); // в итоге преобразован в массив, элементы которого выведены по отдельности ''-сепаратор
console.log(letters+''); // преобразован в строку
console.log(JSON.stringify(letters)); // конечное форматирование позволяет восстановить объект
*/

/*
// Области видимости
const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga'];
const f = s => s.length; // массив строк - в длину

// контексты вложены - вложенные идентификаторы перекрывают внешние по отношению к ним
function f1() {
    const cities = ['Athens', 'Roma'];
    const f = s => s.toUpperCase();
    console.dir({cities});
    console.dir(cities.map(f)); // метод массива вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции
    {
        const f = s => s.toLowerCase(); // переопределение f()
        console.dir({cities});
        console.dir(cities.map(f));
    }
    {
        const cities = ['London', 'Beijing', 'Kiev'];
        console.dir({cities});
        console.dir(cities.map(f));
    }
}
f1();
console.dir({cities}); // вывод списка наименований городов
console.dir(cities.map(f)); // вывод списка длин наименований каждого города
*/

// значение по умолчанию в функциях - переменные приобретают типы
/*
function fnNew(a, b='Hello', c=5){
    console.dir({a,b,c});
}
fnNew(1,2,3);
fnNew(1,2); // подставит 5
fnNew(1); // подставит 'Hello' и 5
fnNew(); // indefined

// ранне подобная задача
function fnOld(a,b,c){
    b=b||'Hello';
    c=c||5;
}
*/

// console.log('Example 1');

// for (let i = 0; i< 3; i++) {
//     console.log(i);
// }

// console.log('Example 2');

// for (let i = 0; i< 3; i++) {
//     console.log(i);
// }

// console.log('Example 3');
// let a = 0;
// while (a< 10) {
//     console.log(a++);
// }

// const hash = {
//     first: 7,
//     second: 10,
//     third: 1,
//     fourth: 5,
// };
// console.log(hash);
// hash['fifth'] = 100;
// console.log(hash);
// hash.sixth = 1000;
// console.log(hash);

// итерирование по ключам объекта (коллекциям)
// for (const key in hash) {
//     const value = hash[key];
//     console.log(
//         key, '\t', typeof key, '\t',      // всегда строки
//         value, '\t', typeof value, '\t',  // любой тип значений
//     );
// }

// // for-in array
// const numbers = [1,2,3,4,5,6,7];
// numbers.field2 = 'value2';
// numbers[-10] = 'value3';
// numbers.field1 = 'value1';
// numbers[5] = 20;


// for (const i in numbers) {
//     const value = numbers[i];
//     console.log(
//         i, '\t', typeof i, '\t',      // всегда строки
//         value, '\t', typeof value, '\t',  // любой тип значений
//     );
// }

// // for-of array
// const numbers = [1,2,3,4,5,6,7];
// numbers.field2 = 'value2';
// numbers[-10] = 'value3';
// numbers.field1 = 'value1';
// numbers[5] = 20;


// for (const i of numbers) {
//     const value = numbers[i];
//     console.log(
//         i, '\t', typeof i, '\t',      // всегда строки
//         value, '\t', typeof value, '\t',  // любой тип значений
//     );
// }

// function squareOfSum(a,b) {
//     return a*a+b*b+2*a*b;
// }
// console.log(squareOfSum(1,10));

// // break

// const flag = false;

// label1: {
//     console.log(1);
//     label2: {
//         console.log(1);
//         break label1; // выход из label1
//         console.log(3);
//     }
//     console.log(4);
// }
// console.log(5);
// // break можно ставить внутри циклов

// continue позволяет продолжить итерирование без выполнения инструкций, следующих после continue

// let i = 0;
// while (i < 10) {
//     i++;
//     console.log('Hello ', i);
//     if (i===5) continue; // вместо break;
//     console.log('World'); //не будет выведена в консоль
// }

// forEach перебор элементов массива

// const numbers = [7,10,1,5,2];

// numbers.forEach((item, i, arr)=> { // array element, порядковый номер, ссылка на сам массив
//     console.log(i,arr,item);
// });

// [7,10,1].forEach(x=>{
//     console.log(x);
// });

// [7,10,1].forEach(x=>console.log(x));

// const log = x => console.log(x);
// [7,10,1].forEach(log); // передаем функцию в метод forEach

// Тесты


// const getColor = (color) => {
//     if (color==='white') {
//         return 'white';
//     }
//     else {
//         return 'black';
//     }
// }
// const getColor = color => color==='white'?'white':'black';

// const isEven = num => num%2===0;
// const increaseNum = num => num + 10;
// const num = 6;
// const result = isEven(increaseNum(num)+1)?num+1:1-num;
// console.log(result);

// const isRightNum = num => (num>10&&num<=5)||(num/7===1);

// const name = 'Javascript';
// const ver = '5';
// const result = `${name[0]} - ${name}, ${ver}.`;
// console.log(result);

// const str = "qwertyuiop";
// const result = `${str[2]}${str[4]}${str[0]}`;
// console.log(result);

// let x = 45;
// let height = x++;
// x = --height;
// console.log(x);

// let b = 10;
// b+=b**2>20?1:10;
// console.log(b);

// let a=4;
// a-=8-a;
// console.log(a);

// задача
/*[13:41] Филимонов Илья
Реализуйте функцию finalGrade(), которая вычисляет итоговую оценку студента на основе двух параметров: оценки за экзамен и количества законченных проектов.Функция принимает два аргумента:exam — оценка за экзамен, число от 0 до 100;
	projects — количество проектов, число от 0 и выше.
Функция возвращает: число (итоговую оценку).Есть четыре возможных итоговых оценки:100, если оценка за экзамен выше 90 или есть больше 10 проектов
	90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
	75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
	0 в любом другом случае
Вот как должна работать ваша функция:пример вызова         // что должна вернуть функция при таком вызове
finalGrade(100, 12);  // 100
finalGrade(99, 0);    // 100
finalGrade(10, 15);   // 100

finalGrade(85, 5);    // 90

finalGrade(55, 3);    // 75

finalGrade(55, 0);    // 0
finalGrade(20, 2);    // 0


*/
function finalGrade(ex,pr) {
    if (ex>90||pr>10) {return 100;}
    else if (ex>75&&pr>5) {return 90;}
    else if (ex>50&&pr>2) {return 75;}
    else return 0;
}
console.log(finalGrade(100, 12), ' - 100'); // 100
console.log(finalGrade(99, 0), ' - 100'); // 100
console.log(finalGrade(10, 15), ' - 100'); // 100
console.log(finalGrade(85, 5), ' - 90'); // 90
console.log(finalGrade(55, 3), ' - 75'); // 75
console.log(finalGrade(55, 0), ' - 0'); // 0
console.log(finalGrade(20, 2), ' - 0'); // 0