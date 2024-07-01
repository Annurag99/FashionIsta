import { Product } from "./product";

export class Order {
    category: string;
    items: Product;
    subtotal: Number;
    total: Number;
    other: string;
}
