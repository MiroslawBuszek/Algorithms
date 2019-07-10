// 5. Palindrome

const isPalindrom = str => {
  const newStr = str.replace(/[^A-Za-z]+/g, '').toLowerCase();
  if (
    newStr === newStr.split('').reverse().join('')
  ) {
    return 'YES';
  } else {
    return 'NO';
  }
};

// Case 1:
console.log(isPalindrom('abut-1-tuba')); // Output YES

// Case 2:
console.log(isPalindrom('@allula')); // Output NO

