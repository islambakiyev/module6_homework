/* ЗАДАЧА 1.
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так
далее. На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию,
 проанализируйте синтаксис. */


function checkArray(array){
    let odd = 0;
    let even = 0;
    let zero = 0;
    let stroka = 0;

    for(let i = 0; i<array.length; i++) {
        if (typeof array[i] === "number" && array[i] !== 0 && !isNaN(array[i])) {
            if (array[i] % 2 === 0) {
                even = even + 1;
            } else if (array[i] % 2 !== 0) {
                odd = odd + 1;
            }

        } else if (typeof array[i] === "string") {
            stroka = stroka + 1;
        } else if (array[i] === 0) {
            zero = zero + 1;
        }
    };

    console.log("Количество четных чисел " + even);
    console.log("Количество нечетных чисел " + odd);
    console.log("Количество нулей " + zero);
    console.log("Количество строк " + stroka);
}


let newArray = [5,9,0,2,4, "CAR", 5,99];
checkArray(newArray);



