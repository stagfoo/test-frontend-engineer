import { getProducts } from "@/network/api";
import Image from "next/image";


import Link from "next/link";

export default async function Home() {
  const products = await getProducts(5)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        TODO Login
        {/* Ran out of time for the login */}
        <Link className="p-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href="/products" >Go to Products</Link>
      </main>
      
    </div>
  );
}
