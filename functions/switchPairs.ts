// Replace the first element of the array with the second, the second with the third, and so on
export const switchPairs = (arr: string[]) => {
    for (let i = 0; i < arr.length - 1; i += 2) {
        const sec = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = sec;
    }
    return arr;
};
