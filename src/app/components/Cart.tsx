'use client'

import { Product } from "@/network/api"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { CartItem } from '@/app/components/CartItem'



export function Cart({
    items,
    removeProductFromCart,
    setCartToOpen,
}: {
    items: {
        [x: string]: {
            product: Product,
            qty: number
        }
    },
    setCartToOpen: (isOpen: boolean) => void
    removeProductFromCart: (id: number) => void
}){
    return (
        <div className="bg-gray-900 flex flex-1 flex-col">
            <div className="flex flex-row justify-center  border-b-1 border-gray-700 p-4 mb-8">
            <h1 className="w-full text-center font-bold">My Cart</h1>
            <button onClick={() => setCartToOpen(false)}><XMarkIcon className="size-4" /></button>
            </div>
            <div className="cart-items w-full flex flex-col gap-4 p-4 pt-0">
            {Object.keys(items).map(i => {
                return <CartItem key={items[i]?.product.id} {...items[i]} removeProduct={removeProductFromCart} />
            })}
            </div>

        </div>
    )
}