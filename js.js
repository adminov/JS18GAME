'use strict';
let isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const user = () => {
    let num = 55;
    const numFromUser = () => {
        let numUser;
        numUser = +prompt('Угадай число от 1 до 100');
        console.log(typeof  numUser);
        if (numUser === num){
            alert('Поздравляю, Вы угадали!!!');
        }
        else {
            if (numUser < num){
                alert('Загаданное число меньше');
                numFromUser();
            }
            if (numUser > num) {
                alert('Загаданное число больше');
                numFromUser();
            }
            if (!isNumber(numUser)){
                alert('Введи число!');
                numFromUser();
            } else {
                alert('Игра окончена');
            }
        }
    };
    return numFromUser();
};

user();