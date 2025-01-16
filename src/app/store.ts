// store/store.ts
import { Product } from '@/network/api'
import { produce } from 'immer'
import { create } from 'zustand'

// Define the store state type
interface StoreState {
  isCartOpen: boolean;
  cart: {
    [x: string]: {
      product: Product,
      qty: number
    }
  }
}

// Define the store actions type
interface StoreActions {
  addProductToCart: (product: Product) => void
  removeProductFromCart: (id: number) => void;
  setIsCartOpen: (isOpen: boolean) => void;
}

// Combine state and actions for the complete store type
type Store = StoreState & StoreActions

// Define the initial state
const initialState: StoreState = {
  cart: {},
  isCartOpen: false,
}

// Create store with Immer integration
const useStore = create<Store>()((set) => ({
  ...initialState,

  // Actions
  //By adding the Cart logic here, I can show the cart when added in a product to the cart
  setIsCartOpen: (isOpen: boolean) => set(produce((state: StoreState) => {
    state.isCartOpen = isOpen
  })),

  addProductToCart: (product: Product) =>
    set(
      //Using immer ensures the state is immutable 
      produce((state: StoreState) => {
        if(state.cart[product.id]){
          state.cart[product.id].qty++;
        } else {
          state.cart[product.id] = {
            product: product,
            qty: 1
          }
        }
      })
    ),
    removeProductFromCart: (id: number) =>
      set(
        produce((state: StoreState) => {
          if(state.cart[id]){
            //Remove one qty
            state.cart[id].qty--
            //remove the item because we can't have 0 or negitive qty
            if(state.cart[id].qty <= 0){
              delete state.cart[id]
            }
          }
        })
      ),
}))

export default useStore