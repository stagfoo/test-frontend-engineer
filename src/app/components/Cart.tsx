'use client'

import { Product } from "@/network/api"

export function Cart({
    items
}: {
    items: Product[]
}){

    return (
        <div className="bg-blue-900 rounded-md p-4 flex flex-1">
            <h1 className="w-full text-center">My Cart</h1>
            {items.map(i => {
                return <span>{i.title}</span>
            })}
        </div>
    )
}