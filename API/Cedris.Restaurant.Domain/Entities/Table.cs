using System;

namespace Cedris.Restaurant.Domain.Entities
{
    public class Table
    {
        public Table()
        {
            Id = Guid.NewGuid();
        }
        public Guid Id { get; set; }
        public string Description { get; set; }
        public int NumberAlias { get; set; }
        public bool Status { get; set; }
    }
}