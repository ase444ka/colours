import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export const mock = new MockAdapter(axios)

const randomBool = () => !!(Math.round(Math.random() * 10) % 2)
const randomPrice = () => Math.floor(Math.random() * 10000)
const randomImg = () => Math.floor(1 + Math.random() * 9)

mock.onGet('/products').reply(function () {
  let id = 1
  const products = []
  for (let i = 0; i < 30; i++) {
    products.push({
      id: id++,
      title: 'Краска Wallquest, Brownsone MS90102',
      price: randomPrice(),
      img: `/photos/${randomImg()}.png`,
      new: randomBool(),
      available: randomBool(),
      contract: randomBool(),
      exclusive: randomBool(),
      sale: randomBool(),
    })
  }
  return [200, products]
})
