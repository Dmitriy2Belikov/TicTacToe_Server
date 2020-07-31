// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const GAME_SESSIONS_ID = '#gameSessions';

//Session Getting
function getGameSessions() {
    $.ajax({
        url: "api/gamesession/list",
        type: "GET",
        success: function (gameSessions) {
            $(GAME_SESSIONS_ID).empty();

            let tableHeaders = '<tr><th>Название сессии</th><th>Количество игроков</th><th></th><th></th></tr>';
            $(GAME_SESSIONS_ID).append(tableHeaders);

            for (let i = 0; i < gameSessions.length; i++) {
                let gameSessionRaw = constructGameSessionRaw(gameSessions[i]);

                $(GAME_SESSIONS_ID).append(gameSessionRaw);
            }
        }
    });
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
    let deleteButton = '<button onclick="deleteGameSession(' + gameSession.id + ')">Удалить</button>';

    return deleteButton;
}

function deleteGameSession(gameSessionId) {
    $.ajax({
        url: "api/gamesession/delete/" + gameSessionId,
        type: "GET",
        data: { id: gameSessionId },
        success: function () {
            $('#' + gameSessionId).remove();
        }
    });
}


// Session Creating
function createGameSession() {
    $('#mainPage').hide();
    $('#createGameSession').show();
}

function sendForm() {
    let name = $('#name').val();
    let countOfPlayers = +$('#players').val();

    if (countOfPlayers > 0 & name != "") {
        let form = {
            Name: name,
            CountOfPlayers: countOfPlayers
        };

        $.ajax({
            url: "api/gamesession/create",
            type: "POST",
            data: { gameSessionViewModel: form },
            contentType: "application/json",
            success: function (gameSession) {
                $('#createGameSession').select('input').each(function () {
                    $(this).empty();
                }).hide();

                getGameSessions();
            }
        });
    }
}