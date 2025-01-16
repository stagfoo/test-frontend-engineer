import { getProducts } from "@/network/api";


import { ProductList } from '@/app/components/ProductList'


export default async function Page() {
  const products = await getProducts(8)

  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ProductList list={products.result} error={products.error} />
      </main>
  );
}
