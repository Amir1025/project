"use strict";





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




const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = prompt("На сколько оцените его?", "");


      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console. log(personalMovieDB);