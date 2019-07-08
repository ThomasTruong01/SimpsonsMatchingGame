$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var firstCardImage = null;
var secondCardImage = null;
const game = [
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0]
];
// let game = blankGame.slice(0);
// let firstCard = null;
// let secondCard = null;
// let attempt = 0;
// let match = 9;

// function initializeApp() {

// }

// let game = blankGame.slice(0);
// let firstCard = null;
// let secondCard = null;
// let attempt = 0;
// let match = 9;

// function initializeApp() {
// 	createGame();
// 	generateCards();
// }

function createGame() {
	for (let i = 1; i < 10; i++) {
		for (let j = 0; j < 2; j++) {
			generateGame(i);
		}
	}
	// console.log(game);
}

function generateGame(num) {
	let x = Math.floor(Math.random() * 5);
	let y = Math.floor(Math.random() * 4);

	if (game[y][x] == 0) {
		game[y][x] = num;
	} else {
		generateGame(num);
	}
	// console.log(game);
}

function selectClass(num) {
	switch (num) {
		case 0:
			return 'homer';
		case 1:
			return 'bart';
		case 2:
			return 'marge';
		case 3:
			return 'lisa';
		case 4:
			return 'maggie';
		case 5:
			return 'ned';
		case 6:
			return 'milhouse';
		case 7:
			return 'ralph';
		case 8:
			return 'burns';
		case 9:
			return 'selma';
	}
}

function generateCards() {
	for (let i = 0; i < game.length; i++) {
		let row = $('<div/>').addClass('row');
		for (let j = 0; j < game[i].length; j++) {
			let card = $('<div/>').addClass('card');
			for (let k = 0; k < 2; k++) {
				myClass = selectClass(game[i][j]);
				if (k == 0) {
					$('<div/>')
						.addClass('card-front')
						.addClass(myClass)
						.attr('value', game[i][j])
						.text(myClass)
						.appendTo(card);
				} else {
					$('<div/>')
						.addClass('card-back')
						.attr('value', game[i][j])
						// .click(handleCardClick)
						.text(myClass)
						.appendTo(card);
				}
				row.append(card);
			}
		}
		$('main .container').append(row);
	}
}

function initializeApp() {
	createGame();
	generateCards();
	$('.card-back').click(handleCardClick);
}

function handleCardClick(event) {
	if (firstCardClicked === null) {
		firstCardClicked = $(event.currentTarget);
		firstCardImage = $(firstCardClicked)
			.siblings()
			.css('background-image');
		$(firstCardClicked).addClass('hidden');
	} else if (firstCardClicked !== null) {
		secondCardClicked = $(event.currentTarget);
		secondCardImage = $(secondCardClicked)
			.siblings()
			.css('background-image');
		$(secondCardClicked).addClass('hidden');
		if (firstCardImage === secondCardImage) {
			console.log('they matched');
			matches += 1;
		} else {
			setTimeout(function() {
				$(firstCardClicked).removeClass('hidden');
			}, 2000);
			setTimeout(function() {
				$(secondCardClicked).removeClass('hidden');
			}, 2000);
			console.log('not matched');
		}
		firstCardClicked = null;
		secondCardClicked = null;
	}
}

$(document).ready(initializeApp);
var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var firstCardImage = null;
var secondCardImage = null;

function initializeApp() {
	$('.lfz-card').click(handleCardClick);
}

function handleCardClick(event) {
	if (firstCardClicked === null) {
		firstCardClicked = $(event.currentTarget);
		firstCardImage = $(firstCardClicked)
			.siblings()
			.css('background-image');
		$(firstCardClicked).addClass('hidden');
	} else if (firstCardClicked !== null) {
		secondCardClicked = $(event.currentTarget);
		secondCardImage = $(secondCardClicked)
			.siblings()
			.css('background-image');
		$(secondCardClicked).addClass('hidden');
		if (firstCardImage === secondCardImage) {
			console.log('they matched');
			matches += 1;
		} else {
			setTimeout(function() {
				$(firstCardClicked).removeClass('hidden');
			}, 2000);
			setTimeout(function() {
				$(secondCardClicked).removeClass('hidden');
			}, 2000);
			console.log('not matched');
		}
		firstCardClicked = null;
		secondCardClicked = null;
	}
}
