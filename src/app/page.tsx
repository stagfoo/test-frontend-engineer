import { getProducts, Product } from "@/network/api";
import Image from "next/image";


type ProductListProps = {
  list: Product[],
  error: unknown
}
export function ProductList({ list, error }:ProductListProps) {
  if(error){
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

export default async function Home() {
  const products = await getProducts(5)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ProductList list={products.result} error={products.error} />


      </main>
      
    </div>
  );
}
