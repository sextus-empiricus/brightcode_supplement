// Write a function that sorts an array of numbers in ascending order using a for loop,
// without creating a new array or using array methods
export const orderAsc = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        for (let y = 0; y < arr.length; y++) {
            const curr = arr[y];

            if (arr[y + 1] < arr[y]) {
                arr[y] = arr[y + 1];
                arr[y + 1] = curr;
            }
        }
    }
    return arr;
};
