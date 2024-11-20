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
    orderedPrice() {
      return this.orderedProducts.reduce((p, c) => (p += c.orderedCount * c.price), 0)
    },
    removedItems() {
      return this.orderedProducts.filter((p) => p.isRemoved)
    },
  },

  actions: {
    async getProducts() {
      const rawProducts = await productsApi.getProducts()
      this.products = rawProducts.map((p) => ({ ...p, orderedCount: 0, isRemoved: false }))
    },
    addToCart(id) {
      const p = this.getProductById(id)
      p.orderedCount++
    },
    removeFromCart(id) {
      const p = this.getProductById(id)
      if (p.orderedCount === 1) {
        this.removeItemFromCart(id)
      } else {
        p.orderedCount--
      }
    },
    removeItemFromCart(id) {
      const p = this.getProductById(id)
      p.isRemoved = true
    },
    restoreToCart(id) {
      const p = this.getProductById(id)
      p.isRemoved = false
    },

    clearCart() {
      this.orderedProducts.forEach(p => p.isRemoved = true)
    }
  },

  clearRemoved() {
    this.removedItems.forEach((p) => {
      p.isRemoved = false
      p.orderedCount = 0
    })
  },
})
