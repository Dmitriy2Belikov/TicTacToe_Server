const GAME_SESSIONS_ID = '#gameSessions'; // Game sessions table id
const SERVER_HOST = "https://localhost:44331/"; // Host of server

//Session Getting
function getGameSessions() {
    $.ajax({
        url: SERVER_HOST + "api/gamesession/list",
        type: "GET",
        success: function (gameSessions) {
            $(GAME_SESSIONS_ID).empty();

            let tableHeaders = '<tr><th>Название сессии</th><th>Количество игроков</th><th></th><th></th></tr>';
            $(GAME_SESSIONS_ID).append(tableHeaders);

            for (let i = 0; i < gameSessions.length; i++) {
                appendGameSession(gameSessions[i]);
            }
        }
    });
}

function appendGameSession(gameSession) {
    let gameSessionRaw = constructGameSessionRaw(gameSession);

    $(GAME_SESSIONS_ID).append(gameSessionRaw);

    setDeleteHandler(gameSession);
}

function constructGameSessionRaw(gameSession) {
    let name = '<td>' + gameSession.name + '</td>';
    let countOfPlayers = '<td>' + gameSession.countOfPlayers + '</td>';

    let acceptButton = '<td><button>Войти</button></td>'
    let deleteButton = '<td>' + constructDeleteButton(gameSession) + '</td>';

    let raw = '<tr id="' + gameSession.id + '">' + name + countOfPlayers + acceptButton + deleteButton + '</tr>';

    return raw;
}

function constructDeleteButton(gameSession) {
    let deleteButton = '<button id="' + gameSession.id + '">Удалить</button>';

    return deleteButton;
}

function deleteGameSession(gameSessionId) {
    $.ajax({
        url: SERVER_HOST + "api/gamesession/delete/" + gameSessionId,
        type: "GET",
        success: function () {
            $('#' + gameSessionId).detach();
        }
    });
}

function setDeleteHandler(gameSession) {
    $(document).on('click', '#' + gameSession.id, function () {
        deleteGameSession(gameSession.id);
    });
}


// Session Creating
function createGameSession() {
    $('#mainPage').hide();
    $('#createGameSession').show();
}

function sendForm() {
    let name = String($('#name').val());
    let countOfPlayers = Number($('#players').val());

    let form = {
        Name: name,
        CountOfPlayers: countOfPlayers
    };

    $.ajax({
        type: "POST",
        url: SERVER_HOST + "api/gamesession/create",
        data: JSON.stringify(form),
        contentType: "application/json;odata=verbose",
        dataType: "json",
        success: function (gameSession) {
            appendGameSession(gameSession);

            $("#createGameSession").hide();
            $("#mainPage").show();
        }
    });
}

$(document).on('submit', '#createForm', function (e) {
    e.preventDefault();

    sendForm();
});