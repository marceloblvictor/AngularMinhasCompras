import { Order } from "./order";
import { Product } from "./product";

export interface OrderProduct {
    id: number;
    quantity: number;
    orderId: number;
    order: Order;
    productId: number;
    product: Product;
}