using System;
using Cedris.Restaurant.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class AppointmentConfig : IEntityTypeConfiguration<Appointment>
{
    public void Configure(EntityTypeBuilder<Appointment> builder)
    {
        builder.Property(p=>p.CustomerName).IsRequired();
        builder.Property(p=>p.Id).IsRequired();
        builder.Property(p=>p.Date).HasDefaultValueSql("getdate()");
        
    }
}