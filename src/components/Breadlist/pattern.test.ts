/* eslint prettier/prettier: [2, {printWidth: 120}] */

import { getPattern } from "./pattern";

describe("ナビゲーションパターン", () => {
  test("全5ページ", () => {
    expect(getPattern(1, 5)).toEqual(["<", 1, 2, 3, 4, 5, ">"]);
    expect(getPattern(2, 5)).toEqual(["<", 1, 2, 3, 4, 5, ">"]);
    expect(getPattern(3, 5)).toEqual(["<", 1, 2, 3, 4, 5, ">"]);
    expect(getPattern(4, 5)).toEqual(["<", 1, 2, 3, 4, 5, ">"]);
    expect(getPattern(5, 5)).toEqual(["<", 1, 2, 3, 4, 5, ">"]);
  });
  test("全8ページ", () => {
    expect(getPattern(1, 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, ">"]);
    expect(getPattern(2, 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, ">"]);
    expect(getPattern(3, 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, ">"]);
    expect(getPattern(4, 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, ">"]);
    expect(getPattern(5, 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, ">"]);
    expect(getPattern(6, 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, ">"]);
    expect(getPattern(7, 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, ">"]);
    expect(getPattern(8, 8)).toEqual(["<", 1, 2, 3, 4, 5, 6, 7, 8]);
  });
  test("全9ページ", () => {
    expect(getPattern(1, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(getPattern(2, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(getPattern(3, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(getPattern(4, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(getPattern(5, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(getPattern(6, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(getPattern(7, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(getPattern(8, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(getPattern(9, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test("全10ページ", () => {
    expect(getPattern(1, 10)).toEqual([1, 2, 3, 4, 5, 6, "dots", 10, ">"]);
    expect(getPattern(2, 10)).toEqual([1, 2, 3, 4, 5, 6, "dots", 10, ">"]);
    expect(getPattern(3, 10)).toEqual([1, 2, 3, 4, 5, 6, "dots", 10, ">"]);
    expect(getPattern(4, 10)).toEqual([1, 2, 3, 4, 5, 6, "dots", 10, ">"]);
    expect(getPattern(5, 10)).toEqual([1, 2, 3, 4, 5, 6, "dots", 10, ">"]);
    expect(getPattern(6, 10)).toEqual(["<", 1, "dots", 5, 6, 7, 8, 9, 10]);
    expect(getPattern(7, 10)).toEqual(["<", 1, "dots", 5, 6, 7, 8, 9, 10]);
    expect(getPattern(8, 10)).toEqual(["<", 1, "dots", 5, 6, 7, 8, 9, 10]);
    expect(getPattern(9, 10)).toEqual(["<", 1, "dots", 5, 6, 7, 8, 9, 10]);
    expect(getPattern(10, 10)).toEqual(["<", 1, "dots", 5, 6, 7, 8, 9, 10]);
  });
  test("全15ページ", () => {
    expect(getPattern(1, 15)).toEqual([1, 2, 3, 4, 5, 6, "dots", 15, ">"]);
    expect(getPattern(2, 15)).toEqual([1, 2, 3, 4, 5, 6, "dots", 15, ">"]);
    expect(getPattern(3, 15)).toEqual([1, 2, 3, 4, 5, 6, "dots", 15, ">"]);
    expect(getPattern(4, 15)).toEqual([1, 2, 3, 4, 5, 6, "dots", 15, ">"]);
    expect(getPattern(5, 15)).toEqual([1, 2, 3, 4, 5, 6, "dots", 15, ">"]);
    expect(getPattern(6, 15)).toEqual(["<", 1, "dots", 5, 6, 7, "dots", 15, ">"]);
    expect(getPattern(7, 15)).toEqual(["<", 1, "dots", 6, 7, 8, "dots", 15, ">"]);
    expect(getPattern(8, 15)).toEqual(["<", 1, "dots", 7, 8, 9, "dots", 15, ">"]);
    expect(getPattern(9, 15)).toEqual(["<", 1, "dots", 8, 9, 10, "dots", 15, ">"]);
    expect(getPattern(10, 15)).toEqual(["<", 1, "dots", 9, 10, 11, "dots", 15, ">"]);
    expect(getPattern(11, 15)).toEqual(["<", 1, "dots", 10, 11, 12, 13, 14, 15]);
    expect(getPattern(12, 15)).toEqual(["<", 1, "dots", 10, 11, 12, 13, 14, 15]);
    expect(getPattern(13, 15)).toEqual(["<", 1, "dots", 10, 11, 12, 13, 14, 15]);
    expect(getPattern(14, 15)).toEqual(["<", 1, "dots", 10, 11, 12, 13, 14, 15]);
    expect(getPattern(15, 15)).toEqual(["<", 1, "dots", 10, 11, 12, 13, 14, 15]);
  });
});
