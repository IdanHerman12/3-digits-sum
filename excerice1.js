'use strict';
const num = 123;
let sum = 0;
sum+=num%10;
console.log(sum);
sum+=Math.floor(num/10%10);
console.log(sum);
sum+=Math.floor(num%100);
console.log(sum);
