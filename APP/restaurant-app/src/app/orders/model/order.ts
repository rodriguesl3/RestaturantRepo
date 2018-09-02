import { Table } from "../../tables/model/table";
import { OrderItem } from "./orderItem";


export class Order {
    id: string;
    tableId: string;
    table: Table;
    discount: number;
    date: Date;
    totalPrice: number;
    OrderItem: OrderItem[]
}
