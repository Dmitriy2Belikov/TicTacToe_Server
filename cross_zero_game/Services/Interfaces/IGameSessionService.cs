using cross_zero_game.Models;
using PagedList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cross_zero_game.Services.Interfaces
{
    public interface IGameSessionService
    {
        void Add(string name, int countOfPlayers);
        GameSession Get(Guid id);
        List<GameSession> GetAll();
        IPagedList GetPagedList(int pageNumber, int pageSize);
        void Remove(Guid id);
    }
}
