'use strict';
let isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const user = () => {
    let num = 55;
    const numFromUser = () => {
        let numUser;
        numUser = prompt('Угадай число от 1 до 100');
        console.log(typeof  numUser);
        if (numUser === null){
            alert('Игра окончена');
            return;
        } else if (numUser < num){
            alert('Загаданное число больше');
            numFromUser();
        }
        else if (numUser > num){
            alert('Загаданное число меньше');
            numFromUser();
        }
        else if  (!isNumber(numUser)){
            alert('Введи число!');
            numFromUser();
        } else {
            alert('Поздравляю, Вы угадали!!!');
        }
    };
    return numFromUser();
};
user();
