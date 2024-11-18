import { defineStore } from 'pinia'
import productsApi from '@/api'

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [],
    deletedFromCart: [],
  }),

  getters: {
    getProductById: (state) => {
      return (id) => state.products.find((p) => p.id == id)
    },
    orderedProducts: (state) => state.products.filter((p) => !!p.orderedCount),
    orderedCount() {
      return this.orderedProducts.reduce((p, c) => (p += c.orderedCount), 0)
    },
  },

  actions: {
    async getProducts() {
      const rawProducts = await productsApi.getProducts()
      this.products = rawProducts.map((p) => ({ ...p, orderedCount: 0 }))
    },
    addToCart(id) {
      const p = this.getProductById(id)
      p.orderedCount++
    },
    removeFromCart(id) {
      const p = this.getProductById(id)
      const count = p.orderedCount
      p.orderedCount = 0
      this.deletedFromCart.push({ id, count })
    },
    restoreToCart(id) {
      const found = this.deletedFromCart.find((item) => item.id === id)
      if (found) {
        const p = this.getProductById(found.id)
        p.orderedCount = found.count
        this.deletedFromCart.splice(foundIndex, 1)
      }
    },
    removeItemFromCart(id) {
      const p = this.getProductById(id)
      if (p.orderedCount === 1) {
        this.removeFromCart(id)
      } else {
        p.orderedCount--
      }
    },
  },
})
