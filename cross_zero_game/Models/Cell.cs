using cross_zero_game.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cross_zero_game.Models
{
    public class Cell
    {
        public int PlaceId { get; set; }
        public CellState CellState { get; set; }
    }
}
