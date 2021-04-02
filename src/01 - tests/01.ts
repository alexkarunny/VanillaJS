
export function sum(a: number, b: number) {
    return a + b;
}

export function SplitWords(x: string) {

    let str = x.toLowerCase();
    let num1,
        num2,
        arr = [];

    for (let i = 0; i < str.length; i++) {
        if ( str.codePointAt(i) <= 122 && str.codePointAt(i) >= 96 ) {
            num1 = i;
            do {
                i++;
            } while ( str.codePointAt(i) <= 122 && str.codePointAt(i) >= 96 )
            num2 = i;
            arr.push(str.slice(num1, num2))
        }
    }

    return arr;
}