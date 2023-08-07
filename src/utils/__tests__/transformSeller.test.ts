import transformSeller from '../transformSeller';

describe('transformSeller', () => {
  it('should return transformed seller', () => {
    const seller = {
      seller_id: 1,
      seller_name: 'test',
      avatar: 'test',
      verified: true,
      followers: 1,
    };

    expect(transformSeller(seller)).toEqual({
      id: seller.seller_id,
      name: seller.seller_name,
      avatar: seller.avatar,
      isVerified: seller.verified,
      numFollowers: seller.followers,
    });
  });
});
