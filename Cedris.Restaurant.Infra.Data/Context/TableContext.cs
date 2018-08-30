using System;
using Cedris.Restaurant.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Cedris.Restaurant.Infra.Data.Context
{
    public class TablesContext : DbContext
    {
        public TablesContext(DbContextOptions<TablesContext> options) : base(options)
        {

        }

        public DbSet<Table> Tables { get; set; }

    }
}