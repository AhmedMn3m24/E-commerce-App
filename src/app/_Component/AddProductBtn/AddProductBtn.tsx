'use client';

import { AddProductToCart } from '@/app/cart/cartaction';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { CartContext } from '../SessionProvider/cartContext';
import { useContext } from 'react';

type AddProductBtnProps = {
    id: string;
    className?: string;
};

export default function AddProductBtn({ id, className }: AddProductBtnProps) {
    const { updateCartCount } = useContext(CartContext)
    const router = useRouter();
    async function handleAddTocart() {
        console.log('adding');

        const isAdded = await AddProductToCart(id);

        if (isAdded) {
            toast.success('Product added to cart');
            updateCartCount(isAdded)

        } else {
            toast.error('Failed to add product to cart');
        }
        await AddProductToCart(id);

        router.push(`/ProductDetalis/${id}`);
    }

    return (
        <Button
            onClick={handleAddTocart}
            className={`bg-black text-white py-2 rounded-lg hover:bg-cyan-950 transition-all duration-300 ${className}`}
        >
            Add to Cart
        </Button>
    );
}
