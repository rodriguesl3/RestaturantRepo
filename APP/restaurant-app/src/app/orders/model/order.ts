import { Table } from "../../tables/model/table";

export interface Order {
    id: string;
    table: Table;
    discount: number;
    date: Date;
}
