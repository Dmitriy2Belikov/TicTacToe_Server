using cross_zero_game.Models;
using PagedList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cross_zero_game.Repositories.Interfaces
{
    public interface IGameSessionRepository
    {
        void Add(GameSession gameSession);
        GameSession Get(Guid id);
        List<GameSession> GetAll();
        IPagedList GetPagedList(int pageNumber, int pageSize);
        void Remove(Guid id);
    }
}
