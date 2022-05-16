const gamesFilterById = (products, favProductsIdArray) => {
  return products.filter((product) => {
    if (favProductsIdArray.includes(product.id)) {
      return product;
    }
    return null;
  });
};

export default gamesFilterById;
