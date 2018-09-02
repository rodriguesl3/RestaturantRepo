using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Cedris.Restaurant.Infra.Data.Migrations
{
    public partial class AdjustOrderItem0109 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_Order_OrderId1",
                table: "Items");

            migrationBuilder.DropIndex(
                name: "IX_Items_OrderId1",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "OrderId",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "OrderId1",
                table: "Items");

            migrationBuilder.CreateTable(
                name: "OrderItem",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    OrderId = table.Column<Guid>(nullable: false),
                    ItemId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderItem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderItem_Items_ItemId",
                        column: x => x.ItemId,
                        principalTable: "Items",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderItem_Order_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Order",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderItem_ItemId",
                table: "OrderItem",
                column: "ItemId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderItem_OrderId",
                table: "OrderItem",
                column: "OrderId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrderItem");

            migrationBuilder.AddColumn<int>(
                name: "OrderId",
                table: "Items",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<Guid>(
                name: "OrderId1",
                table: "Items",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Items_OrderId1",
                table: "Items",
                column: "OrderId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Order_OrderId1",
                table: "Items",
                column: "OrderId1",
                principalTable: "Order",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
