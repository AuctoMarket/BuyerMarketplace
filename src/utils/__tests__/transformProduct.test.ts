import transformProduct from '../transformProduct';

describe('transformProduct', () => {
  const product = {
    product_id: 1,
    title: 'test',
    condition: 'test',
    desc: 'test',
    images: [{ image_path: 'test' }],
    product_type: 'test',
    price: 1,
    product_quantity: 1,
    sold_quantity: 1,
    seller_id: 1,
    posted_date: '2021-01-01',
  };
  const transformedProduct = {
    id: product.product_id,
    title: product.title,
    condition: product.condition,
    description: product.desc,
    images: product.images.map((image: any) => image.image_path),
    type: product.product_type,
    price: product.price,
    quantity: product.product_quantity,
    soldQuantity: product.sold_quantity,
    sellerId: product.seller_id,
    postedDate: new Date(product.posted_date),
  };

  it('should return transformed product', () => {
    expect(transformProduct(product)).toEqual(transformedProduct);
  });

  it('should return transformed product when images undefined', () => {
    expect(
      transformProduct({
        ...product,
        images: undefined,
      }),
    ).toEqual({
      ...transformedProduct,
      images: ['/images/no-photo.png'],
    });
  });

  it('should return transformed product when images array empty', () => {
    expect(
      transformProduct({
        ...product,
        images: [],
      }),
    ).toEqual({
      ...transformedProduct,
      images: ['/images/no-photo.png'],
    });
  });
});
