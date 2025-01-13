import { Product } from "@/network/api"
import { StarIcon } from '@heroicons/react/24/solid'
import { Rating } from "./Rating"

type ProductCardProps = {
    product: Product,
    href: string
}

export function ProductCard({
    product,
    href
}: ProductCardProps){
    return (


<div className="product-card max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between	">
    <div>
    <a href={href} className="bg-white flex items-center justify-center p-8 rounded-t-lg">
        <img className="rounded-t-lg object-contain h-52" src={product.image} alt="" />
    </a>
    <div className="p-5">
        <a href={href}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate ...">{product.description}</p>
        </div>
        </div>
        <div className="flex flex-row justify-between p-5 pt-0 order-last">
        <a href={href} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <div>
            <Rating value={product.rating.rate} count={product.rating.count} />
        </div>
    </div>
</div>
    )
}