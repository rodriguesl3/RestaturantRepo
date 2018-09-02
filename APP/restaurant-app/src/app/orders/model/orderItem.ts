import { Order } from "./order";
import { Items } from "../../items/model/items";

export class OrderItem {
  id: string;
  orderId: string;
  order: Order;
  itemId: string;
  item: Items;

}