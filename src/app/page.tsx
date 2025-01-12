import { getProducts } from "@/network/api";
import Image from "next/image";


import { ProductList } from '@/app/components/Productlist'

export default async function Home() {
  const products = await getProducts(5)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ProductList list={products.result} error={products.error} />


      </main>
      
    </div>
  );
}
