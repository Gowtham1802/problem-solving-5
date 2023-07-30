var age = 22;
let ages = 23;
const sum = age+ages;
console.log(sum);




// 1.Given an array of integers, rearrange the elements in a way that all the even numbers
// come before the odd numbers.



// function AlternateRearrange(arr, n)
// {
//     // Sort the array
//     arr.sort((a,b)=>a-b);
 
//     var v1 = []; // to insert even values
//     var v2 = []; // to insert odd values
 
//     for (var i = 0; i < n; i++)
//         if (arr[i] % 2 == 0)
//             v1.push(arr[i]);
//         else
//             v2.push(arr[i]);
 
//     var index = 0, i = 0, j = 0;
 
//     var flag = false;
 
//     // Set flag to true if first element is even
//     if (arr[0] % 2 == 0)
//         flag = true;
 
//     // Start rearranging array
//     while (index < n) {
 
//         // If first element is even
//         if (flag == true) {
//             arr[index++] = v1[i++];
//             flag = !flag;
//         }
 
//         // Else, first element is Odd
//         else {
//             arr[index++] = v2[j++];
//             flag = !flag;
//         }
//     }
 
//     // Print the rearranged array
//     for (i = 0; i < n; i++)
//         document.write( arr[i] + " ");
// }
 
// // Driver code
// var arr = [9, 8, 13, 2, 19, 14];
// var n = arr.length;
// AlternateRearrange(arr, n);



// // 2. Write a function to find the missing number in an array of integers from 1 to N.

// function findMissing(myArr,X){
//   let i;
//   let temp = [];
//   for (i = 0; i <= X; i++) {
//             temp[i] = 0;
//         }
 
//         for (i = 0; i < X; i++) {
//             temp[myArr[i] - 1] = 1;
//         }
 
//         let ans = 0;
//         for (i = 0; i <= X; i++) {
//             if (temp[i] == 0)
//                 ans = i + 1;
//         }
//         console.log(ans);
// }
 
// // Driver code
//         let myArr = [ 1, 3, 7, 5, 6, 2 ];
//         let X = myArr.length;
 
//         // Function call
//        findMissing(myArr,X);


// 3. Given a string with parentheses, check if it is balanced (each opening parenthesis has a corresponding closing parenthesis).



// Set - 2 start here

// 1. Given an array of integers, find the sum of all even and odd numbers separately.


function EvenOddSum(arr, n)
{
    let even = 0;
    let odd = 0;
    for (let i = 0; i < n; i++)
    {
    if (i % 2 == 0)
        even += arr[i];
    else
        odd += arr[i];
    }
 
    document.write("Even index positions sum " + even);
    document.write("<br>" + "Odd index positions sum " + odd);
}
 
    let arr = [ -6, -12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -5, -10 ];
    let n = arr.length;
 
    EvenOddSum(arr, n);


// 2. Write a function that takes a number n as input and returns the sum of the first n prime numbers.

const isPrime = (n) => {
   for(let i = 2; i <= n/2; i++){
      if(n % i === 0){
         return false;
      }
   };
   return true;
};
const generatePrime = num => {
   const arr = [];
   let i = 2;
   while(arr.length < num){
      if(isPrime(i)){
         arr.push(i);
      };
      i = i === 2 ? i+1 : i+2;
   };
   return arr;
};
console.log(generatePrime(6));
console.log(generatePrime(16));
console.log(generatePrime(36));



// 3. Write a function that takes a number n as input and returns the sum of the squares of all positive integers up to n.



// 4. Write a function that takes an array of two numbers as input and returns the smallest common multiple of the two numbers.


function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

function smallestCommonMultiple(arr) {
    
    const [num1, num2] = arr;

    const greatestCommonDivisor = gcd(num1, num2);

    const lcm = (num1 * num2) / greatestCommonDivisor;

    return lcm;
}

console.log(smallestCommonMultiple([1, 5])); 
console.log(smallestCommonMultiple([3, 7])); 



// 5. Write a function that takes a number as input and returns the sum of its digits.

function sumOfDigits(number) {
    const numberStr = number.toString();

    let sum = 0;

    for (let i = 0; i < numberStr.length; i++) {
        sum += parseInt(numberStr[i], 10);
    }

    return sum;
}

console.log(sumOfDigits(123)); 
console.log(sumOfDigits(9876));



// 6.Write a function that takes an array as input and returns true if the array is symmetric (reads the same backward as forward), otherwise returns false.


function isSymmetric(arr) {

    const mid = Math.floor(arr.length / 2);

    for (let i = 0; i < mid; i++) {
        
        if (arr[i] !== arr[arr.length - 1 - i]) {
            
            return false;
        }
    }
    return true;
}

console.log(isSymmetric([1, 2, 3, 2, 1])); 
console.log(isSymmetric([1, 2, 3, 3, 1])); 


// 7. Write a function that takes an array of strings as input and returns the longest common prefix among them.


function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return ""; 
    }

    const referenceStr = strs[0];

    for (let i = 0; i < referenceStr.length; i++) {
        const currentChar = referenceStr[i];

        for (let j = 1; j < strs.length; j++) {
            const currentStr = strs[j];
            
            if (i === currentStr.length || currentChar !== currentStr[i]) {
                return referenceStr.slice(0, i);
            }
        }
    }

    return referenceStr;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));



// 8. Write a function that takes a string of digits as input and returns the phone number formatted as (XXX) XXX-XXXX.


    function formatPhoneNumber(digits) {
    const cleanedDigits = digits.replace(/\D/g, '');

    const areaCode = cleanedDigits.slice(0, 3);
    const centralOfficeCode = cleanedDigits.slice(3, 6);
    const lineNumber = cleanedDigits.slice(6);

    return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
}

console.log(formatPhoneNumber("1234567890")); 
console.log(formatPhoneNumber("9876543210")); 



// 9. Write a function that takes a string as input and returns the string with its characters sorted by frequency.


function sortByFrequency(str) {
    
    const frequencyMap = {};
    for (const char of str) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    const sortedChars = Object.keys(frequencyMap).sort((a, b) => {
        const freqDiff = frequencyMap[b] - frequencyMap[a];
        return freqDiff !== 0 ? freqDiff : a.localeCompare(b);
    });

    let sortedStr = '';
    for (const char of sortedChars) {
        sortedStr += char.repeat(frequencyMap[char]);
    }

    return sortedStr;
}

// Test cases
console.log(sortByFrequency("tree"));  
console.log(sortByFrequency("cccaaa"));


// 10.Write a function that takes an array of integers as input and returns the length of the longest consecutive sequence of elements.


function longestConsecutive(num) {
    if (num.length === 0) {
        return 0;
    }

    const numSet = new Set(num);

    let maxLength = 0;
    
    for (const num of numSet) {

        if (!numSet.has(num - 1)) {
            let currentLength = 1;
            let currentNum = num + 1;

            while (numSet.has(currentNum)) {
                currentLength++;
                currentNum++;
            }

            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([1, 2, 3, 5, 6, 7]));    