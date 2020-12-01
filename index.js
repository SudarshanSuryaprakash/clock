const listReversible = (upperLimit) => {
    //creating an empty array to push numbers that are reversible into
    const resultList = [];

    //to check that there are 120 numbers satisfying the condition from 1 to 1000
    let count = 0;

    //looping from 1 to the upperLimit
    for(let i = 1; i <= upperLimit; i++ ){
        //gets the stringified individual digits in an array - it's done here so that I can skip i if it ends in a 0.
        const numArray = getIndividualDigits(i);
        if(parseInt(numArray.pop()) === 0) continue;

        //if the sum of i and the reverse of i pass the isOdd function, it is reversible and is added to the resultList
        if(isOdd(sum(i,reverseNumber(i)))) {
            resultList.push(i)
            count++;
        }
    }
    console.log(count)
    return resultList;
}

//reverses the number and returns the reversed number
const reverseNumber = (number) => {

    //gets stringified individual digits in an array so that the numbers can be reversed easily with the .reverse() function - could also use
    // recursion or standard iteration and keep appending to the start of the string. 

    const numArray = getIndividualDigits(number);

    //reverses the array
    numArray.reverse();

    //getting a string back from the reversed array
    const reversedNum = numArray.join('');
    
    //parsing the string back to an integer and returning the reversed integer
    return parseInt(reversedNum);
}

//Not only does this check whether a number is odd, it checks whether each digit in the number is odd and returns true/false appropriately
const isOdd = (number) => {
    //gets stringified individual digits so that their oddness can be checked
    const numArray = getIndividualDigits(number);

    //loops through each digit
    for(let num of numArray){
        //parsing the string digit into an integer
        intNum = parseInt(num);

        //checking whether the digit is even - return false if satisfied
        if(intNum%2 === 0) return false

    }

    //if the code reaches here, every digit is odd, return odd
    return true
}

//simply sums two digits and returns the sum
const sum = (num1, num2) => {
    return num1 + num2;
}

//takes a number and returns stringified individual digits in an array so that it can be used by multiple functions
const getIndividualDigits = (number) => {
    //converts the number to a string so that it can be split into an array
    numString = number.toString();
    
    //splits the string into an array
    const numArray = numString.split('');

    //returns the array
    return numArray;
    
}

//test - returns the array as expected - My solution runs in quadratic time O(N^2). Also logs the count of the number of digits in the 
//array for easy checking.
console.log(listReversible(1000));