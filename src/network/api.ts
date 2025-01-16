export type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

export type GetProducts = {
    result: Product[];
    error: unknown
}

export async function getProducts(limit: number): Promise<GetProducts> {
    try {
        const result = await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
        return {
            result: await result.json(),
            error: null
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
        return {
            result: [],
            error: new Error('Failed to getProducts')
        }
    }
}
export type GetSingleProducts = {
    result: Product | null;
    error: unknown
}

export async function getSingleProduct(id: string): Promise<GetSingleProducts> {
    try {
        const result = await fetch(`https://fakestoreapi.com/products/${id}`)
        return {
            result: await result.json(),
            error: null
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
        return {
            result: null,
            error: new Error('Failed to getSingleProduct')
        }
    }
}
