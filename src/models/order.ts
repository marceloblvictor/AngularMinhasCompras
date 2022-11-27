import { OrderProduct } from "./orderProduct";

export interface Order {
    id: number;
    customerId: number;
    orderProducts: OrderProduct[]    
}