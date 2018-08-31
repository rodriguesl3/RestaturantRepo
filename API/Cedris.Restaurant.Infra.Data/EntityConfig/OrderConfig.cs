using System;
using Cedris.Restaurant.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class OrderConfig : IEntityTypeConfiguration<Order>
{
    public void Configure(EntityTypeBuilder<Order> builder)
    {
        //builder.Property(o=>o.DateTime).HasColumnType("DateTime");
        builder.Property(x => x.Id).IsRequired();
        builder.Property(o => o.Date).IsRequired();
        
        //builder.Property(o => o.Discount).HasPrecision(20,10);
        builder.HasKey(o => o.Id);
    }
}