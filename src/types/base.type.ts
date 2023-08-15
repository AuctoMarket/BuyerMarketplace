interface Sort {
  sort_by?: string;
  sort_direction?: 'asc' | 'desc';
}

interface Pagination {
  offset?: number;
  limit?: number;
}

export type { Sort, Pagination };
