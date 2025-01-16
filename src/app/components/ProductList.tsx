import { Product } from "@/network/api";
import { ProductCard } from "@/app/components/ProductCard";
import { ErrorBlock } from "@/app/components/Error";

type ProductListProps = {
  list: Product[];
  error: unknown;
};

export function ProductList({ list, error }: ProductListProps) {
  if (error) {
    return (
      <ErrorBlock
        title="Oops!"
        subtitle="Looks like there was an issue getting products at this time!"
        byline="Please try refreshing the page with the button below"
        linkText="Refresh the page and try again"
        href="/products"
      />
    );
  }
  return (
    <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1">
      {list.map((product) => {
        return (
          <ProductCard
            key={product.id}
            href={`/products/${product.id}`}
            product={product}
          />
        );
      })}
    </div>
  );
}
