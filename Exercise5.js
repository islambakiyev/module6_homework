/* ЗАДАЧА 5.
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль.*/

const pow = (a, b) => {
    let result = a;
    for (let i = 1; i < b; i++) {
        result = result * a;
    }
    return result;
}

console.log(pow(9, 7));