using System;
using Microsoft.EntityFrameworkCore;

namespace Cedris.Restaurant.Infra.Data.Context
{
    public class OrdersContext : DbContext
    {
        public OrdersContext(DbContextOptions<OrdersContext> options) :base(options)
        {
            
        }

        public DbSet<Cedris.Restaurant.Domain.Entities.Order> Order { get; set; }



    }
}