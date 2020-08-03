const SERVER_HOST = "https://localhost:44331/"; // Host of server

// Game Field Working
function getGameField(gameSessionId) {
	$.ajax({
		url: SERVER_HOST + "api/gamesession" + gameSessionId,
		type: "GET",
		success: function (gameSession) {
			let players = gameSession.players;

			$("#creator").empty();
			$("#creator").append(gameSession.players[0].name);
		},
	});

	for (let i = 0; i < 3; i++) {
		var row = "";

		for (let j = 0; j < 3; j++) {
			let cell = "<td>rgr</td>";

			row += cell;
		}

		$("#gameField").append("<tr>" + row + "</tr>");
	}
}

function joinPlayer(gameSessionId) {}
