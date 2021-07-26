
function maxNumber(arg) {
    let max = arg[0];
    for (let i = 1; i < arg.length; i++) {
        if (arg[i] > max) max = arg[i];
    }
    document.write(`Максимальне число =  ${max}`);
}

let numbers = [];
let index = 0;
let result = true;
while (result == true) {
    numbers[index] = +prompt('Введіть число');
    result = confirm('Ввести ще число у масив?');
    index++;
}
document.write(` Масив чисел ${numbers}`);
document.write("<p> </p>");
maxNumber(numbers);
