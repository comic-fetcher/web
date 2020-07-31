export function getPattern(
  currentPage: number,
  totalPages: number,
): (number | "<" | ">" | "dots")[] {
  if (totalPages <= 7)
    return ["<", ...[...new Array(totalPages)].map((_, i) => i + 1), ">"];
  if (totalPages === 8)
    return currentPage === 8
      ? ["<", 1, 2, 3, 4, 5, 6, 7, 8]
      : [1, 2, 3, 4, 5, 6, 7, 8, ">"];
  if (totalPages === 9) return [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // >= 10
  if (currentPage <= 5) return [1, 2, 3, 4, 5, 6, "dots", totalPages, ">"];
  if (totalPages - 5 < currentPage)
    return [
      "<",
      1,
      "dots",
      totalPages - 5,
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  return [
    "<",
    1,
    "dots",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "dots",
    totalPages,
    ">",
  ];
}
