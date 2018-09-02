using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Cedris.Restaurant.Infra.Data.Migrations
{
    public partial class AdjustOrderItem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderItem_Items_ItemId",
                table: "OrderItem");

            migrationBuilder.DropIndex(
                name: "IX_OrderItem_ItemId",
                table: "OrderItem");

            migrationBuilder.DropColumn(
                name: "ItemId",
                table: "OrderItem");

            migrationBuilder.AddColumn<Guid>(
                name: "OrderItemId",
                table: "Items",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Items_OrderItemId",
                table: "Items",
                column: "OrderItemId");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_OrderItem_OrderItemId",
                table: "Items",
                column: "OrderItemId",
                principalTable: "OrderItem",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_OrderItem_OrderItemId",
                table: "Items");

            migrationBuilder.DropIndex(
                name: "IX_Items_OrderItemId",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "OrderItemId",
                table: "Items");

            migrationBuilder.AddColumn<Guid>(
                name: "ItemId",
                table: "OrderItem",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_OrderItem_ItemId",
                table: "OrderItem",
                column: "ItemId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItem_Items_ItemId",
                table: "OrderItem",
                column: "ItemId",
                principalTable: "Items",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
