interface Sort {
  sort_by?: string;
}

interface Pagination {
  anchor?: number;
  limit?: number;
}

export type { Sort, Pagination };
