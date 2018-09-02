using System;
using Cedris.Restaurant.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class ItemConfig : IEntityTypeConfiguration<Item>
{
    public void Configure(EntityTypeBuilder<Item> builder)
    {
        builder.Property(p=>p.Id).IsRequired();
        builder.Property(p=>p.Description).IsUnicode();
    }

}