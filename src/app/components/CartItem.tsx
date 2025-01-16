'use client'

import { Product } from "@/network/api"
import Image from "next/image"


export function CartItem({ product, qty, removeProduct }: { product: Product, qty: number, removeProduct: (id: number) => void }) {
    return <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-row gap-2">
        <Image  width={100} height={100} alt={product.title} src={product?.image} className="bg-white p-1 rounded w-1/4"/>
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
            {qty > 1 ? "Remove 1 item" : "Remove item"}
            </button>
    </div>
}