type GetProducts = {
    
}

export async function getProducts(limit: number): Promise<GetProducts> {
    try {
    const result = await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
    return result.json()
    } catch {
        throw new Error('Sorry! there is an issue accessing products at this time')
    }
}

type GetSingleProduct = {
    
}

export async function getSingleProduct(id: string): Promise<GetSingleProduct> {
    try {
        const result = await fetch(`https://fakestoreapi.com/products/${id}`)
        return result.json()
        } catch {
            throw new Error('Sorry! there is an issue getting that product at this time')
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