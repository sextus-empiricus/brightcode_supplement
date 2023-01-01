import {orderAsc} from '../functions';

describe('orderAsc', () => {
    const arr = [1, 4, 5, 2, 3];

    it(`EMPTY arr >>> should return []`, () => {
        expect(orderAsc([])).toEqual([]);
    });
    it(`ONE element arr >>> should return [1]`, () => {
        expect(orderAsc([1])).toEqual([1]);
    });
    it(`UNIQUE values arr >>> should return [1, 2, 3, 4, 5]`, () => {
        expect(orderAsc(arr)).toEqual([1, 2, 3, 4, 5]);
    });
    it(`DUPLICATED values >>> should return [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]`, () => {
        expect(orderAsc([...arr, 5, 4, 3, 2, 1])).toEqual([
            1, 1, 2, 2, 3, 3, 4, 4, 5, 5,
        ]);
    });
});
