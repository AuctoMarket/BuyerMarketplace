import transformProduct from '../transformProduct';

describe('transformProduct', () => {
  it('should return transformed product', () => {
    const product = {
      product_id: 1,
      title: 'test',
      condition: 'test',
      desc: 'test',
      images: ['test'],
      product_type: 'test',
      price: 1,
      seller_id: 1,
      posted_date: '2021-01-01',
    };

    expect(transformProduct(product)).toEqual({
      id: product.product_id,
      title: product.title,
      condition: product.condition,
      description: product.desc,
      images: product.images,
      type: product.product_type,
      price: product.price,
      sellerId: product.seller_id,
      postedDate: new Date(product.posted_date),
    });
  });
});
