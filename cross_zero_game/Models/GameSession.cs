using cross_zero_game.StateMachines;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cross_zero_game.Models
{
    public class GameSession
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public GameField GameField { get; set; }
        public List<Player> Players { get; set; }
        public int CountOfPlayers { get; set; }
        public GameSessionStates State { get; set; }
    }
}
