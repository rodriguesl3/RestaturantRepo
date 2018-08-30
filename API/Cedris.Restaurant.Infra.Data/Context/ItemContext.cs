using System;
using Cedris.Restaurant.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Cedris.Restaurant.Infra.Data.Context
{
    public class ItemsContext : DbContext
    {
        public ItemsContext(DbContextOptions<ItemsContext> options) : base(options)
        {

        }

        public DbSet<Item> Items { get; set; }

    }
}