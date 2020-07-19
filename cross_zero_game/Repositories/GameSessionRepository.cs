using cross_zero_game.Models;
using cross_zero_game.Repositories.Interfaces;
using PagedList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cross_zero_game.Repositories
{
    public class GameSessionRepository : IGameSessionRepository
    {
        private List<GameSession> _gameSessions;

        public GameSessionRepository()
        {
            _gameSessions = new List<GameSession>();
        }

        public void Add(GameSession gameSession)
        {
            _gameSessions.Add(gameSession);
        }

        public GameSession Get(Guid id)
        {
            var gameSession = _gameSessions.Find(s => s.Id == id);

            return gameSession;
        }

        public List<GameSession> GetAll()
        {
            return _gameSessions;
        }

        public IPagedList GetPagedList(int pageNumber, int pageSize)
        {
            return _gameSessions.ToPagedList(pageNumber, pageSize);
        }

        public void Remove(Guid id)
        {
            var gameSession = _gameSessions.Find(s => s.Id == id);

            _gameSessions.Remove(gameSession);
        }
    }
}
