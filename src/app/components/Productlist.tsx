import { Product } from "@/network/api";

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
            {list.map(a => {
                console.log(a);
                return <div key={a.id}>
                    <span >{a.id}</span>
                    <span >{a.title}</span>
                    <span >{a.description}</span>
                    <span >{a.category}</span>
                    <span >{a.image}</span>
                    <span >{a.rating.rate}</span>
                </div>
            })}
        </div>
    )
}