using cross_zero_game.Models;
using cross_zero_game.StateMachines;
using PagedList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cross_zero_game.Services.Interfaces
{
    public interface IGameSessionService
    {
        GameSession Add(string name, GameSessionStates state, Player creator);
        GameSession Get(Guid id);
        List<GameSession> GetAll();
        IPagedList GetPagedList(int pageNumber, int pageSize);
        void Remove(Guid id);
    }
}
