export interface N {
  a: number;
  b: number;
  value: number;
}
export const add = (a: number, b: number): N => {
  return { a, b, value: a + b };
};
