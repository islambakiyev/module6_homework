/* ЗАДАЧА 3.
Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент
и возвращает сумму этих двух чисел. Выведите в консоль результат. */

function acceptNumber(numberA){
    return function acceptNumber2 (numberB){
        return console.log(numberA+numberB);
    };
}

acceptNumber(99)(1);