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
    } catch (err) {
        return {
            result: [],
            error: err
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
    } catch (err) {
        return {
            result: null,
            error: err
        }
    }
}
type GetUserCart = {

}

export async function getUserCart(id: string): Promise<GetUserCart> {
    try {
        const result = await fetch(`https://fakestoreapi.com/carts/user/${id}`)
        return result.json()
    } catch {
        throw new Error('Sorry! there is an issue getting that product at this time')
    }
}

type GetUserResponse = {

}

export async function getUser(id: string): Promise<GetUserResponse> {
    try {
        const result = await fetch(`https://fakestoreapi.com/users/${id}`)
        return result.json()
    } catch {
        throw new Error('Sorry! there is an issue getting that product at this time')
    }
}