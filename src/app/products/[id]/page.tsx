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
        <main className="flex lg:flex-row flex-col-reverse">
            <section className="lg:basis-1/3 basis-1/2 bg-white lg:p-16 p-8 m-8 rounded-lg ">
                <div className="img-container">
                    <img className="rounded-t-lg object-cover" src={product.image} alt="" />
                </div>
                <div>
            </div>
            </section>
            <section className="lg:basis-2/3 basis-1/2 lg:p-8 lg:w-64 ">
                <a href="#">{product.category}</a>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to Cart</button>
                </div>
            </section>
        </main>
    );
}
