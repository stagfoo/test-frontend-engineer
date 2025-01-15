// store/store.ts
import { Product } from '@/network/api'
import { produce } from 'immer'
import { create } from 'zustand'

// Define the store state type
interface StoreState {
  cart: Product[]
}

// Define the store actions type
interface StoreActions {
  addProductToCart: (product: Product) => void
  reset: () => void
}

// Combine state and actions for the complete store type
type Store = StoreState & StoreActions

// Define the initial state
const initialState: StoreState = {
  cart: []
}

// Create store with Immer integration
const useStore = create<Store>()((set) => ({
  ...initialState,

  // Actions
  addProductToCart: (product: Product) =>
    set(
      produce((state: StoreState) => {
        state.cart.push(product)
      })
    ),

  // Reset store to initial state
  reset: () => set(initialState)
}))

export default useStore