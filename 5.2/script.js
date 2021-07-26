let flag = true;
let num = +prompt('Введіть число');
if (num < 0) num = -num;
function simple(number) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            flag = false;
            console.log('Це не просте число');
            break; // выйдем из цикла
        }
        console.log('Це просте число');
    }
}

simple(num);