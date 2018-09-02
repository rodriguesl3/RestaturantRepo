using System;
using System.Collections.Generic;

namespace Cedris.Restaurant.Domain.Entities
{
    public class OrderItem
    {
        public OrderItem()
        {
            Id = Guid.NewGuid();
        }

        public Guid Id { get; set; }
        public Guid OrderId { get; set; }
        public Order Order { get; set; }
        public Guid ItemId { get; set; }
        public Item Item { get; set; }
       
    }
}