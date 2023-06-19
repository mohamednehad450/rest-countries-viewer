export const formatNumber = (n: number): string => {
  const arr = String(n).split("");
  for (let i = arr.length - 4; i >= 0; i -= 3) {
    arr[i] = arr[i] + ",";
  }
  return arr.join("");
};
