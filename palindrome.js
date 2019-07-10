// 5. Palindrome

const isPalindrom = str => {
  const newStr = str.replace(/[^A-Za-z]+/g, '').toLowerCase();
console.log(newStr);
  return newStr === newStr.split('').reverse().join('');
};
console.log(isPalindrom('abut-1-TUbA'));
