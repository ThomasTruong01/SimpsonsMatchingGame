$(document).ready(initializeApp);

const blankGame = [
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0]
];
let game = blankGame.slice(0);
let firstCard = null;
let secondCard = null;
let attempt = 0;
let match = 0;

function initializeApp() {
	createGame();
	generateCards();
}

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
				if (k == 0) {
					myClass = selectClass(game[i][j]);
					$('<div/>')
						.addClass('card-front')
						.addClass(myClass)
						.attr('value', game[i][j])
						.appendTo(card);
				} else {
					$('<div/>')
						.addClass('card-back')
						.attr('value', game[i][j])
						.appendTo(card)
						.click(handleClick);
				}
				row.append(card);
			}
		}
		$('main .container').append(row);
	}
}

function handleClick(e) {
	card = $(e.currentTarget);

	if (firstCard != null && secondCard != null) {
		if (firstCard.prev().attr('class') != secondCard.prev().attr('class')) {
			$(firstCard).removeClass('hidden');
			$(secondCard).removeClass('hidden');
			firstCard = null;
			secondCard = null;
		}
	}
	$(card).addClass('hidden');
	if (firstCard == null) {
		firstCard = card;
	} else {
		secondCard = card;
	}
	if (firstCard != null && secondCard != null) {
		attempt++;
		$('#attempt').text(attempt);
		if (firstCard.prev().attr('class') == secondCard.prev().attr('class')) {
			console.log('match');
			firstCard = null;
			secondCard = null;
			match++;
			$('#match').text(match);
		}
		let accuracy = '';
		accuracy = ((match / attempt) * 100).toFixed(1);
		console.log(accuracy);
		$('#accuracy').html(accuracy + '<span>%</span>');
		if (match == 10) {
			displayPlayAgain();
		}
	}
}

function displayPlayAgain() {
	let accuracy = '';
	accuracy = ((match / attempt) * 100).toFixed(1);
	$('#shadow').removeClass('hidden');
	$('#playAgain').removeClass('hidden');
	$('#playAgain h3').html('Accuracy: ' + accuracy + '<span>%</span>');

	$('#restart').click(function() {
		$('main .container').html(' ');
		$('#shadow').hide();
		$('#playAgain').hide();
		game = blankGame.slice(0);
		createGame();
		generateCards();
		match = 0;
		attempt = 0;
	});
}
