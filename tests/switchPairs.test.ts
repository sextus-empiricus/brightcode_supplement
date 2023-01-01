import {switchPairs} from '../functions';

describe('switchFn', () => {
    const even = 'abcd'
    const odd = even + 'e';

    it(`EMPTY arr >>> should return []`, () => {
        expect(switchPairs([])).toEqual([]);
    });
    it(`ONE element arr  >>> should return ['a']`, () => {
        expect(switchPairs(['a'])).toEqual(['a']);
    });
    it(`EVEN number of element >>> should return ['b', 'a', 'd', 'c']`, () => {
        expect(switchPairs(even.split(''))).toEqual(['b', 'a', 'd', 'c']);
    });
    it(`ODD number of element >>> should return ['b', 'a', 'd', 'c', 'e']`, () => {
        expect(switchPairs(odd.split(''))).toEqual(['b', 'a', 'd', 'c', 'e']);
    });
});
