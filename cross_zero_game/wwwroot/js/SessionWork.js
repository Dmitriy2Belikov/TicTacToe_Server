const GAME_SESSIONS_ID = "#gameSessions"; // Game sessions table id
const MAIN_PAGE_ID = "#mainPage";

const SERVER_HOST = "https://localhost:44331/"; // Host of server

let tempGameSessionId = new String();

//Session Getting
function getGameSessions() {
	$.ajax({
		url: SERVER_HOST + "api/gamesession/list",
		type: "GET",
		success: function (gameSessions) {
			$(GAME_SESSIONS_ID).empty();

			let tableHeaders =
				"<tr><th>Название сессии</th><th>Количество игроков</th><th></th><th></th></tr>";
			$(GAME_SESSIONS_ID).append(tableHeaders);

			for (let i = 0; i < gameSessions.length; i++) {
				appendGameSession(gameSessions[i]);
			}
		},
	});
}

function appendGameSession(gameSession) {
	let gameSessionRaw = constructGameSessionRaw(gameSession);

	$(GAME_SESSIONS_ID).append(gameSessionRaw);
}

function constructGameSessionRaw(gameSession) {
	let name = "<td>" + gameSession.name + "</td>";
	let countOfPlayers = "<td>" + gameSession.countOfPlayers + "/2</td>";

	let joinButton =
		'<td><input id="join" type="button" value="Присоединиться" /></td>';
	let deleteButton = "<td>" + constructDeleteButton(gameSession) + "</td>";

	let raw =
		'<tr id="' +
		gameSession.id +
		'">' +
		name +
		countOfPlayers +
		joinButton +
		deleteButton +
		"</tr>";

	return raw;
}

$(document).on("click", "#join", function () {
	tempGameSessionId = $(this).closest("tr").attr("id");

	$("#mainPage").hide();
	$("#joining").show();
});

$(document).on("submit", "#joiningForm", function (e) {
	e.preventDefault();

	let player = {
		Name: $("#joiningName").val(),
	};

	debugger;

	window.location.href = SERVER_HOST + tempGameSessionId;
});

function constructDeleteButton(gameSession) {
	let deleteButton =
		'<input type="button" value="Удалить" id="deleteButton" />';

	return deleteButton;
}

$(document).on("click", "#deleteButton", function () {
	var gameSessionId = $(this).closest("tr").attr("id");

	deleteGameSession(gameSessionId);
});

function deleteGameSession(gameSessionId) {
	$.ajax({
		url: SERVER_HOST + "api/gamesession/delete/" + gameSessionId,
		type: "GET",
		success: function () {
			$("#" + gameSessionId).detach();
			getGameSessions();
		},
	});
}

// Session Creating
function createGameSession() {
	$(MAIN_PAGE_ID).hide();
	$("#createGameSession").show();
}

function sendForm() {
	let name = String($("#name").val());
	let creatorName = String($("#creatorName").val());

	let form = {
		Name: name,
		CreatorName: creatorName,
	};

	$.ajax({
		type: "POST",
		url: SERVER_HOST + "api/gamesession/create",
		data: JSON.stringify(form),
		contentType: "application/json;odata=verbose",
		dataType: "json",
		success: function (gameSession) {
			window.location.href = SERVER_HOST + gameSession.id;
		},
	});
}

$(document).on("submit", "#createForm", function (e) {
	e.preventDefault();

	sendForm();
});
