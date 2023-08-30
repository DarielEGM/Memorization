"use strict";

let cache = [];

const memoizer = func =>{
    return e =>{
        const index = e.toString();
        if(cache[index] == undefined){
            cache[index] = func(e);
        }
        return cache[index];
    }
}

const doSomething = num =>{
    const a =20;
    const b = 12;
    let c = 0;
    for(let i =num-1; i>=0; i--){
        for(let j =i-1; j>=0; j--){
            c += a*b;
        }
    }
    return c;
}

const memo = memoizer(doSomething);

const date1 = new Date();
memo(30000);
console.log(new Date() - date1);

const date2 = new Date();
memo(90000);
console.log(new Date() - date2);

const date3 = new Date();
memo(30000);
console.log(new Date() - date3);

const date4 = new Date();
memo(90000);
console.log(new Date() - date4);
