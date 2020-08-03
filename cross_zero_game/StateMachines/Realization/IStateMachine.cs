using System;

namespace cross_zero_game.StateMachines.Realization
{
    public interface IStateMachine<States, Inputs>
        where States : Enum
        where Inputs : Enum
    {
        States CurrentState { get; set; }
        StateMachine<States, Inputs> Configure(States state);
        StateMachine<States, Inputs> Permit(Inputs input, States arrivalState);
        StateMachine<States, Inputs> Fire(Inputs input);
        bool CanFireFrom(States startState, Inputs input);
        bool CanFireFromTo(States startState, Inputs input, States finishState);
    }
}
