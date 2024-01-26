//'use strict';

//console.log('arr'+ '-object');
//console.log(4 + +'5');

//let incr = 10,
	//decr = 10;
//++incr;
//--decr;

//console.log(++incr);
//console.log(--decr);

//console.log(5%2);

//console.log(2 + 2 * 2 !== '6');

//const	isChecked = false;
		//isClose = false;
//console.log(isChecked || !isClose);
//const category = 'toys';

//console.log(`hhtps://someurl/${category}/5`);

//const user = 'Ivan';

//alert(`Hello, ${user}`);

//alert('Hello');

//const result = confirm('Are you here?');
//console.log(result);

//const	answer	=	+prompt('Вам есть 18?', '18');
//console.log(answer+5);

//const answers = [];

//answers[0] = prompt('What is your name?', '');
//answers[1] = prompt('What is your age?', '');
//answers[2] = prompt('Where do you live?', '');

//console.log(typeof(answers));
//console.log(typeof(null));

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const	a = prompt ('Один из последних просмотренных фильмов?', ''),
		b = prompt ('На сколько оцените его?', ''),
		c = prompt ('Один из последних просмотренных фильмов?', ''),
		d = prompt ('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);