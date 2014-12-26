var basicGame = {
	player1Pos: 0,
	player2Pos: 0,
	winningScore: 10,

	init: function() {
		window.onkeypress = basicGame.buttonPressed;
	},

	buttonPressed: function(e) {
		// 49 = Green button, player 1
		// 50 = Red button, player 2
		var elemToUpdate = undefined;

		if (e.keyCode == 49) {
			basicGame.player1Pos += 1;
			elemToUpdate = document.getElementById('player1-' + basicGame.player1Pos);
			elemToUpdate.className += ' player1Pressed animated rubberBand';
		} else if (e.keyCode == 50) {
			basicGame.player2Pos += 1;
			elemToUpdate = document.getElementById('player2-' + basicGame.player2Pos);
			elemToUpdate.className += ' player2Pressed animated rubberBand';
		}

		// Did anybody win?
		if (basicGame.player1Pos == basicGame.winningScore) {
			alert('Player 1 Wins!');
		} else if (basicGame.player2Pos == basicGame.winningScore) {
			alert('Player 2 Wins!');
		}

	}
};

window.onload = function() {
	basicGame.init();
}
