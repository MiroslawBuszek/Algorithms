// 4. Reverse Array

const reverseArray = num => num.map(num.pop, [...num])

console.log(reverseArray([1,2,3,4,5,6]));




