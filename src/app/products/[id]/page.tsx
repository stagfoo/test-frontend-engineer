"use client";

import { useEffect, useState } from "react";
import { use } from "react";
import useStore from "@/app/store";
import { getSingleProduct } from "@/network/api";
import { ErrorBlock } from "@/app/components/Error";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const addToCard = useStore((state) => state.addProductToCart);
  const setCartToOpen = useStore((state) => state.setIsCartOpen);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const data = await getSingleProduct(id);
        if (data.error || data.result === null) {
          setError(true);
        } else {
          setProduct(data.result);
        }
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !product) {
    return (
      <ErrorBlock
        title="Oops!"
        subtitle="Looks like there was an issue getting this product at this time!"
        byline="Please try refreshing the page with the button below"
        linkText="Refresh the page and try again"
        href="/products"
      />
    );
  }

  return (
    <main className="flex lg:flex-row flex-col-reverse">
      <section className="lg:basis-1/3 basis-1/2 bg-white lg:p-16 p-8 m-8 rounded-lg">
        <div className="img-container">
          <img
            className="rounded-t-lg object-cover"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div></div>
      </section>
      <section className="lg:basis-2/3 basis-1/2 lg:p-8 lg:w-64">
        <div className="p-5">
          <div className="inline-block mb-2 rounded-md bg-slate-800 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
            {product.category}
          </div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.description}
          </p>
          <button
            onClick={() => {
              setCartToOpen(true);
              addToCard(product);
            }}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
}
