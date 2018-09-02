using System;
using Cedris.Restaurant.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class OrderItemConfig : IEntityTypeConfiguration<OrderItem>
{
    public void Configure(EntityTypeBuilder<OrderItem> builder)
    {
        
        builder.HasOne(p=>p.Order)
               .WithMany(p=>p.OrderItem)
               .HasForeignKey(p=>p.OrderId);

        builder.HasOne(p=>p.Item)
               .WithMany(p=>p.OrderItems)
               .HasForeignKey(p=>p.ItemId);
    }
}