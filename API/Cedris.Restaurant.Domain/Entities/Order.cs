using System;
using System.Collections.Generic;

namespace Cedris.Restaurant.Domain.Entities
{
    public class Order
    {
        public Order()
        {
            Id = Guid.NewGuid();
        }

        public Guid Id { get; set; }
        public Table Table { get; set; }
        public decimal Discount { get; set; }
        public DateTime Date { get; set; }
       
    }
}