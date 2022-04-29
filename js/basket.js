class Basket {
  static productsArr = products.map((product) => {
    return {
      id: product.id,
      title: product.title,
      count: 0,
      totalPrice: 0,
    }
  })

  static totalPrice = 0;

  static totalCount = 0

  static setProduct(productId) {
    const productInDB = products.find((product) => {
      if (product.id === productId) {
        return true
      }
    })

    const result = this.productsArr.map(product => {
      if (product.id === productId) {
        const count = product.count + 1;
        const totalPrice = count * productInDB.price;

        return {
          ...product,
          count: count,
          totalPrice: totalPrice,
        }
      }

      return product
    });
    this.productsArr = result;

    setToLocalStorage();
  }
}

const setToLocalStorage = () => {
  const products = Basket.productsArr;
  localStorage.setItem('basket', JSON.stringify(products));
}
