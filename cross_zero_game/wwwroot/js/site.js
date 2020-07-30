// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function getList() {
    $.ajax({
        url: "api/gamesession/list",
        type: "GET",
        success: function (gameSessions) {
            $('#gameSessions').empty();

            for (let i = 0; i < gameSessions.length; i++) {
                let gameSessionRaw = constructGameSessionRaw(gameSessions[i]);

                $('#gameSessions').append(gameSessionRaw);
            }
        }
    });
}

function constructGameSessionRaw(gameSession) {
    let name = '<td>' + gameSession.name + '</td>';
    let deleteButton = '<td>' + constructDeleteButton(gameSession) + '</td>';

    let raw = '<tr id="' + gameSession.id + '">' + name + deleteButton + '</tr>';

    return raw;
}

function constructDeleteButton(gameSession) {
    let deleteButton = '<input type="button" value="Удалить" onclick="deleteGameSession(' + gameSession.id + ')" />';

    return deleteButton;
}

function deleteGameSession(gameSessionId) {

    let form = {
        id: gameSessionId
    };

    $.ajax({
        url: "api/gamesession/delete/" + gameSessionId,
        type: "GET",
        success: function () {
            $('#' + gameSessionId).detach();
        }
    });
}