interface Sort {
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

interface Pagination {
  offset?: number;
  limit?: number;
}

export type { Sort, Pagination };
