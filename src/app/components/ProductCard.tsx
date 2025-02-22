import { Product } from "@/network/api";
import { Rating } from "./Rating";
import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
  href: string;
};

export function ProductCard({ product, href }: ProductCardProps) {
  return (
    <div className="product-card max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between	">
      <div>
        <Link
          href={href}
          className="bg-white flex items-center justify-center md:p-8 rounded-t-lg"
        >
          <Image
            width={300}
            height={300}
            className="rounded-t-lg object-contain h-52"
            src={product.image}
            alt={product.title}
          />
        </Link>
        <div className="p-5">
          <a href={href}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate ...">
            {product.description}
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between p-5 pt-0 order-last">
        <Link
          href={href}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View Product
        </Link>
        <div>
          <Rating value={product.rating.rate} count={product.rating.count} />
        </div>
      </div>
    </div>
  );
}
