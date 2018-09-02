using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Cedris.Restaurant.Infra.Data.Migrations
{
    public partial class RemoveAppointment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Appointment");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Appointment",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CustomerName = table.Column<string>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false, defaultValueSql: "getdate()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Appointment", x => x.Id);
                });
        }
    }
}
