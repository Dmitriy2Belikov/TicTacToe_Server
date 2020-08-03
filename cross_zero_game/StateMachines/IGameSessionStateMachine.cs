using cross_zero_game.StateMachines;
using cross_zero_game.StateMachines.Realization;

namespace cross_zero_game.Services.StateMachines
{
    public interface IGameSessionStateMachine : IStateMachine<GameSessionStates, GameSessionStateChangers>
    {

    }
}
