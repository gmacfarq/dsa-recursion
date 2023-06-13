/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.splice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;

  let firstWord = words[0].length;
  let restWords = longest(words.splice(1));

  return (firstWord > restWords) ? firstWord : restWords;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";

  if (str.length % 2 === 1) {
    return (str.charAt(0) + everyOther(str.slice(1)));
  }
  else {
    return ("" + everyOther(str.slice(1)));
  }
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) return false;

  if (arr[0] === val) return true;

  return find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

  //base
  if (str.length <= 1) return true;

  //catch
  if (str[0] !== str[str.length - 1]) return false;

  //recursive
  return isPalindrome(str.slice(1, str.length - 1));


}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";

  return (revString(str.slice(1)) + str.charAt(0));

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

  function _getidx(val, i = 0) {
    if (i === arr.length) return -1;
    if (arr[i] === val) return i;
    return _getidx(val, i + 1);
  }

  return _getidx(val);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let out = [];

  function _getStrings(obj) {
    const keys = Object.keys(obj);
    for (let key of keys) {
      if (typeof obj[key] === "object") _getStrings(obj[key]);
      if (typeof obj[key] === "string") out.push(obj[key]);
    }
  }

  _getStrings(obj);
  return out;

}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {
  
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
