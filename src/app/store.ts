// store/store.ts
import { Product } from '@/network/api'
import { produce } from 'immer'
import { create } from 'zustand'

// Define the store state type
interface StoreState {
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
  reset: () => void
}

// Combine state and actions for the complete store type
type Store = StoreState & StoreActions

// Define the initial state
const initialState: StoreState = {
  cart: {}
}

// Create store with Immer integration
const useStore = create<Store>()((set) => ({
  ...initialState,

  // Actions
  addProductToCart: (product: Product) =>
    set(
      produce((state: StoreState) => {
        //This is because the null check
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
            state.cart[id].qty--
            if(state.cart[id].qty <= 0){
              delete state.cart[id]
            }
          }
        })
      ),

  // Reset store to initial state
  reset: () => set(initialState)
}))

export default useStore