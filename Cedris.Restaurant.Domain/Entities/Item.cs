using System;

namespace Cedris.Restaurant.Domain.Entities
{
    public class Item
    {
        public Item()
        {
            ItemId = Guid.NewGuid();
        }

        public Guid ItemId { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
        public string Image { get; set; }
    }
}