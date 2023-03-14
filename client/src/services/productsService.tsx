import { Product } from "../types/product"
import products from "./mockProducts"

export const getAllProducts = (currentPage: number, limit: number, status: string, date: string) : Promise<{total: number, data: Product[] }> => {
  return Promise.resolve({
    total: products
            .filter(elem => elem.status.includes(status))
            .filter(elem => elem.date.includes(date)).length,
    data: products
            .filter(elem => elem.status.includes(status))
            .filter(elem => elem.date.includes(date))
            .slice((currentPage - 1) * limit, currentPage * limit) as Product[],
  })
}

// export const getAllProducts = (currentPage: number, limit: number, status: string, date: string) : Promise<{total: number, data: Product[] }> => {
//   Promise.resolve(products)
//   .then((product) => product.filter(elem => elem.status.includes(status)).filter(elem => elem.date.includes(date)))
//   .then((product) => {
//     return ({
//       total: product.length,
//       data: product.slice((currentPage - 1) * limit, currentPage * limit) as Product[],
//     })
//   })
// }
