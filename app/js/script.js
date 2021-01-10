'use strict';

/*
// вывод последовательности значений текущего времени с заданным интервалом

const INTERVAL = 500;
let counter = 0;
const MAX_VALUE = 10;
let timer = null;

const event = () => {
    if (counter === MAX_VALUE) {
        console.log('The end');
        clearInterval(timer);
        return;
    }
    console.dir({counter, date: new Date()});
    counter++;
};

console.log('Begin');
timer = setInterval(event, INTERVAL);
*/

/*
const LOOP_MAX_VALUE = 10; //Литерал числа
console.log('Begin');
for(let i=0; i<LOOP_MAX_VALUE; i++) {
    console.dir({i, date: new Date()});
}
console.log('The end');
*/

/*
// стрелочная функция

const add = (a,b) => a+b;
console.log('Add numbers: 5 + 2 = ' + add(5,2));
console.log('Add numbers: 5.1 + 2.3 = ' + add(5.1,2.3));
console.log(`Concatenate: '5' + '2' = '${add(5,2)}'`);
console.log('Substruction: 5 + (-2) = ' + add(5, -2));
*/



/*
//Object

// welcome - наименование функции, person - параметр функции

const welcome = person => {
    console.log(`Ave, ${person.name}`); // строковые шаблоны
};

// литералы объектов

const marcus = {name: 'Marcus Aurelius'};
const mao = {name: 'Mao Zedong'};
const cartesius = {name: 'Rene Descartes'};

// вызовы функции

welcome(marcus);
welcome(mao);
welcome(cartesius);
*/



/*
// массивы

const welcome = person => {
    console.log(`Ave, ${person.name}`); // строковые шаблоны
};

// литерал массива

const persons = [
    {name: 'Marcus Aurelius'},
    {name: 'Mao Zedong'},
    {name: 'Rene Descartes'},
];

for(let person of persons) {
    welcome(person);
}
*/



// способы объявления функций

// function declaration (нет присвоения, без return выводится undefined)
// глобальная (видна везде в .js)

function inc(a) {
    return a + 1;
}


// function expression (идентификатору присваивается занчение функционального типа)

const sum = function(a, b) {
    return a + b;
}


// lambda expression

const max = (a, b) => (a > b ? a : b);


// lambda function

const avg = (a, b) => {
    const s = sum(a, b);
    return s/2;
}

console.log('inc(6) = ' + inc(6));
console.log('sum(1,3) = ' + sum(1,3));
console.log('max(8,6) = ' + max(8,6));
console.log('avg(8,6) = ' + avg(8,6));
