import type { Product } from '../types/product.type';

enum ProductsSortBy {
  postedDate = 'posted_date',
}

enum ProductsSortDirection {
  asc = 'asc',
  desc = 'desc',
}

interface ProductsQuery {
  sellerId?: string;
}

interface ProductsSort {
  sortBy?: ProductsSortBy;
  sortDirection?: ProductsSortDirection;
}

interface ProductsPagination {
  offset?: number;
  limit?: number;
}

const getProductById = (_productId: string): Product | undefined => {
  // TODO: implement this function to return a product by id
  return undefined;
};

const listProducts = (
  _query?: ProductsQuery,
  _options?: ProductsSort & ProductsPagination,
): Product[] => {
  // const { sellerId } = query || {};
  // const {
  //   sortBy = ProductsSortBy.postedDate,
  //   sortDirection = ProductsSortDirection.desc,
  //   offset = 0,
  //   limit = 5,
  // } = options || {};

  // TODO: implement this function to return products list
  return [];
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProductById,
  listProducts,
};
