using System;
using Cedris.Restaurant.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class OrderConfig : IEntityTypeConfiguration<Order>
{
    public void Configure(EntityTypeBuilder<Order> builder)
    {
        
        builder.HasOne(p=>p.Table)
               .WithMany(p=>p.OrdersList)
               .HasForeignKey(p=>p.TableId);

    }
}