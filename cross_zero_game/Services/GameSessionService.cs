using cross_zero_game.Models;
using cross_zero_game.Repositories.Interfaces;
using cross_zero_game.Services.Interfaces;
using PagedList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cross_zero_game.Services
{
    public class GameSessionService : IGameSessionService
    {
        private IGameSessionRepository _gameSessionRepository;

        public GameSessionService(IGameSessionRepository gameSessionRepository)
        {
            _gameSessionRepository = gameSessionRepository;
        }

        public void Add(string name, int countOfPlayers)
        {
            var gameField = new GameField();

            var cells = new List<Cell>();
            for (int i = 0; i < 9; i++)
                cells.Add(new Cell() { PlaceId = i + 1, CellState = Enums.CellState.Empty});

            gameField.Cells = cells;

            var gameSession = new GameSession()
            {
                Id = Guid.NewGuid(),
                Name = name,
                CountOfPlayers = countOfPlayers,
                GameField = gameField,
                Players = new List<Player>()
            };

            _gameSessionRepository.Add(gameSession);
        }

        public GameSession Get(Guid id)
        {
            var gameSession = _gameSessionRepository.Get(id);

            return gameSession;
        }

        public List<GameSession> GetAll()
        {
            return _gameSessionRepository.GetAll();
        }

        public IPagedList GetPagedList(int pageNumber, int pageSize)
        {
            return _gameSessionRepository.GetPagedList(pageNumber, pageSize);
        }

        public void Remove(Guid id)
        {
            _gameSessionRepository.Remove(id);
        }
    }
}
