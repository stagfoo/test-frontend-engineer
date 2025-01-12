import { getProducts, getSingleProduct } from "@/network/api";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    const data = await getSingleProduct(id)

    if (data.error || data.result === null) {
        return <div>Error</div>
    }

    const product = data.result
    return (
        <div>
            <a href="/products">back to list</a>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <img className="rounded-t-lg object-cover h-64" src={product.image} alt="" />
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate ...">{product.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </main>
            </div>
        </div>
    );
}
