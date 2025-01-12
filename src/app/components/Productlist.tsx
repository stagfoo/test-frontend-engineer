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
        <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2">
            {list.map(product => {
                return <ProductCard key={product.id} href={`/products/${product.id}`} product={product} />
            })}
        </div>
    )
}