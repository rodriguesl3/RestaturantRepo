import { Order } from "./order";
import { Items } from "../../items/model/items";

export class OrderItem {
  id: string;
  order: Order;
  item: Items;

}