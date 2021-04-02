import {sum} from './01';
import {SplitWords} from './01';

test('Sum should be corrected', () => {
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result = sum(a, b);

    //expect result
    expect(result).toBe(3);

})

test('words should be splitted', () => {
    let sen1 = "Hello my dear friend!";
    let sen2 = "I  go - We go!"

    const result1 = SplitWords(sen1);
    const result2 = SplitWords(sen2);

    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('dear');
    expect(result1[3]).toBe('friend');

    expect(result2[0]).toBe('i');
    expect(result2[1]).toBe('go');
    expect(result2[2]).toBe('we');
    expect(result2[3]).toBe('go');


})
