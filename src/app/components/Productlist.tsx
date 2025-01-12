import { Product } from "@/network/api";
import { ProductCard } from '@/app/components/ProductCard'

type ProductListProps = {
    list: Product[],
    error: unknown
}
export function ProductList({ list, error }: ProductListProps) {
    if (error) {
        return <div>Error</div>
    }
    return (
        <div>
            {list.map(product => {
                return <ProductCard key={product.id} href={`/products/${product.id}`} product={product} />
            })}
        </div>
    )
}