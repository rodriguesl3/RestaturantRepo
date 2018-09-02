using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Cedris.Restaurant.Infra.Data.Migrations
{
    public partial class AdjustOrderAndTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Tables_TableId",
                table: "Order");

            migrationBuilder.AlterColumn<Guid>(
                name: "TableId",
                table: "Order",
                nullable: false,
                oldClrType: typeof(Guid),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Tables_TableId",
                table: "Order",
                column: "TableId",
                principalTable: "Tables",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Tables_TableId",
                table: "Order");

            migrationBuilder.AlterColumn<Guid>(
                name: "TableId",
                table: "Order",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Tables_TableId",
                table: "Order",
                column: "TableId",
                principalTable: "Tables",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
