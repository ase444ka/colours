export const productCountDeclencion = (count) => {
  if (count % 10 === 1 && count !== 11) {
    return count + ' товар'
  }
  if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count)) {
    return count + ' товара'
  }
  return count + ' товаров'
}
