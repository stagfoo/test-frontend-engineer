'use client'

import { Product } from "@/network/api"
import { TrashIcon } from "@heroicons/react/24/outline"


export function CardItem({ product, qty, removeProduct }: { product: Product, qty: number, removeProduct: (id: number) => void }) {
    return <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-row gap-2">
        <img src={product?.image} className="bg-white p-1 rounded w-1/4"/>
        <div className=" flex flex-col justify-between m-1">
        <small className="w-full flex flex-row gap-4">{product?.title}</small>
        <small>Qty {qty}</small>
        </div>
        </div>
        <button className="bg-blue-800 rounded p-2 flex flex-1 flex-col justify-center items-center text-left" onClick={() => {
            if(product?.id){
                removeProduct(product?.id)
            }
        } }>
            Remove
            </button>
    </div>
}

export function Cart({
    items,
    removeProductFromCart,
}: {
    items: {
        [x: string]: {
            product: Product,
            qty: number
        }
    },
    removeProductFromCart: (id: number) => void
}){

    return (
        <div className="bg-gray-900 p-4 flex flex-1 flex-col">
            <h1 className="w-full text-center font-bold border-b-1 border-gray-700 pb-4 mb-8">My Cart</h1>
            <div className="cart-items w-full">
            {Object.keys(items).map(i => {
                return <CardItem key={items[i]?.product.id} {...items[i]} removeProduct={removeProductFromCart} />
            })}
            </div>

        </div>
    )
}