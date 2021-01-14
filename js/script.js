"use strict";





// if (4 == 9) {
//     console. log("ok");
// } else {
//     console. log("error");
// }



// if (num < 49){
//     console. log("Error");
// } else if (num > 100) {
//     console. log("Много");
// } else {
//     console. log("Ok");
// }

// (num == 50) ? console. log("Ok") : console. log("Error");


// const num = 50;

// switch (num) {
//     case 49:
//         console. log("неверно");
//         break;
//         case 100:
//         console. log("неверно");
//         break;
//         case 5:
//             console. log("Верно");
//             break;
//         default:
//             console. log("Не в этот раз");
//             break;
// }
// const answer = +prompt("Вам есть 18?", "18");
// console. log(answer + 5);


// const answers = [];

// answers[0] = prompt("Как ваше имя", "Амир");
// answers[1] = prompt("Как ваша фамилия", "Махлоев");
// answers[2] = prompt("Сколько вам лет", "31");

// console. log(answers);


// const category = "toys";

// console. log(`https://url.com/${category}`);

// const user = "Amir";
// alert(`Привет, ${user}`);




// let incr = 10,
// decr = 10;

// incr++;
// decr--;


// console. log(incr);
// console. log(decr);

// console. log(2+2 === 4);



// const isCeckend = true,
//       isClose = false;

//       console. log(isCeckend && isClose);



/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */









// while (num <= 56) {
//     console.log(num);
//     num++;
// }

// do {
    //     console.log(num);
//     num++;
// }

// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;

//     }

//     console.log(i);
// }



/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания








/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания





let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};





function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = prompt("На сколько оцените его?", "");
              if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("done");
              } else {
                  console.log("error");
                i--;
              }
              
    }

}

// rememberMyFilms();




function detectPersonalLevel() {

    if (personalMovieDB.count <10) {
        console.log("Просмотрено довольно мало фильмов");
        
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
        
    
}

// detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
    
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();