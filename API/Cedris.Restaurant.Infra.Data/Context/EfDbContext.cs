using System;
using Cedris.Restaurant.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Cedris.Restaurant.Infra.Data.Context
{
    public class EfDbContext : DbContext
    {
        public EfDbContext(DbContextOptions<EfDbContext> options) : base(options)
        {

        }
        public DbSet<Item> Items { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<Table> Tables { get; set; }
        public DbSet<OrderItem> OrderItem { get; set; }
        public DbSet<Appointment> Appointment { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new OrderConfig());
            modelBuilder.ApplyConfiguration(new AppointmentConfig());
            base.OnModelCreating(modelBuilder);
        }

        //  protected override void OnModelCreating(DbModelBuilder modelBuilder)
        // {
        //     modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        //     modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
        //     modelBuilder.Conventions.Remove<ManyToManyCascadeDeleteConvention>();    

        //     modelBuilder.Properties<string>().Configure(p => p.HasColumnType("varchar"));
        //     modelBuilder.Properties<string>().Configure(p => p.HasMaxLength(100));

        //     modelBuilder.Configurations.Add(new OrderConfig());
        //     modelBuilder.Configurations.Add(new TableConfig());
        //     modelBuilder.Configurations.Add(new ItemConfig());
        // }
    }
}