using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Cedris.Restaurant.Infra.Data.Migrations
{
    public partial class AdjustOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_OrderItem_OrderItemId",
                table: "Items");

            migrationBuilder.DropTable(
                name: "OrderItem");

            migrationBuilder.RenameColumn(
                name: "OrderItemId",
                table: "Items",
                newName: "OrderId1");

            migrationBuilder.RenameIndex(
                name: "IX_Items_OrderItemId",
                table: "Items",
                newName: "IX_Items_OrderId1");

            migrationBuilder.AddColumn<int>(
                name: "OrderId",
                table: "Items",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Order_OrderId1",
                table: "Items",
                column: "OrderId1",
                principalTable: "Order",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_Order_OrderId1",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "OrderId",
                table: "Items");

            migrationBuilder.RenameColumn(
                name: "OrderId1",
                table: "Items",
                newName: "OrderItemId");

            migrationBuilder.RenameIndex(
                name: "IX_Items_OrderId1",
                table: "Items",
                newName: "IX_Items_OrderItemId");

            migrationBuilder.CreateTable(
                name: "OrderItem",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    OrderId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderItem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderItem_Order_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Order",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderItem_OrderId",
                table: "OrderItem",
                column: "OrderId");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_OrderItem_OrderItemId",
                table: "Items",
                column: "OrderItemId",
                principalTable: "OrderItem",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
