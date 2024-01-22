const arr = ['a', 'b', 'c'];

arr[10] = '3456';

console.log(arr);

const arrObj = {
    a:'a',
    1:'b',
    2:'c',
    abc: {
        df: [{}, {}],
        def:{

        }
    }
};
const [b] = 'b';

//arrObj.b = '1234';
arrObj[b] = [];

console.log(arrObj['b']);
console.log(arrObj.b);

console.log(arr[1]);
console.log(arrObj[1]);

// const obj = {a: 1, b:2};
const obj = {
    Anna: 500,
    'Alice':800
};