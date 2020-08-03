using System;
using System.Collections.Generic;

namespace cross_zero_game.StateMachines.Realization
{
    public class StateMachine<States, Inputs> : IStateMachine<States, Inputs>
        where States : Enum
        where Inputs : Enum
    {
        public States CurrentState { get; set; }
        private States _configurationState { get; set; }
        private List<(States, Inputs, States)> _links { get; set; }

        public StateMachine()
        {
            _links = new List<(States, Inputs, States)>();
        }

        public StateMachine<States, Inputs> Configure(States state)
        {
            _configurationState = state;
            return this;
        }

        public StateMachine<States, Inputs> Permit(Inputs input, States arrivalState)
        {
            _links.Add((_configurationState, input, arrivalState));
            return this;
        }

        public StateMachine<States, Inputs> Fire(Inputs input)
        {
            try
            {
                var link = _links.Find(l => l.Item1.Equals(CurrentState) && l.Item2.Equals(input));

                CurrentState = link.Item3;
            }
            catch
            {
                throw new Exception();
            }

            return this;
        }

        public bool CanFireFrom(States startState, Inputs input)
        {
            var link = _links.Find(l => l.Item1.Equals(startState) && l.Item2.Equals(input));

            var result = (link != (null, null, null)) ? true : false;

            return result;
        }

        public bool CanFireFromTo(States startState, Inputs input, States finishState)
        {
            return _links.Contains((startState, input, finishState));
        }
    }
}
