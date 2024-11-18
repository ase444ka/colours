import axios from 'axios'
/*eslint-disable-next-line*/
import { mock } from './mock'

export default {
  async getProducts() {
    console.log('getpro')
    const { data } = await axios.get(`/products`)
    return data
  },
}
