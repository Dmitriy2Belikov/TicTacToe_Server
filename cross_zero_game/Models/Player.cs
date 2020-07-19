using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cross_zero_game.Models
{
    public class Player
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public PointType PointType { get; set; }
    }
}
