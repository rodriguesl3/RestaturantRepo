using Microsoft.EntityFrameworkCore.Migrations;

namespace Cedris.Restaurant.Infra.Data.Migrations
{
    public partial class AdjustOrder_0109 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "TotalPrice",
                table: "Order",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotalPrice",
                table: "Order");
        }
    }
}
