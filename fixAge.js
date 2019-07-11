// 10. Fix age

const fixAge = num => {
            return num.filter(num => (num >= 18 && num <= 60)).toString()    
};



// Case 1:
console.log(fixAge([5,15,25,78,59,45])); // Output 25,59,45

// Case 2:
console.log(fixAge([18,3,30,22,11,60])); // Output 18,30,22,60

// Case 3:

console.log(fixAge([1,3,3,2,11,6])); // Output NA