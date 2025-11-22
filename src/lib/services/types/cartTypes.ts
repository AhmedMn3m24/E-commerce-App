import { ProductType } from "@/lib/interfaces/Category";

export type ItemType = {
    count: number;
    _id: string;
    price: number;
    product: ProductType;
};
export type CartResponseType = {
    numOfCartItems: number;
    products: ItemType[];
    totalCartPrice: number;
};