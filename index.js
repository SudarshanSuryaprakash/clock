const listReversible = (upperLimit) => {
    //creating an empty array to push numbers that are reversible into
    const resultList = [];

    //to check that there are 120 numbers satisfying the condition from 1 to 1000
    let count = 0;

    //loop to check 
    for(let i = 1; i <= upperLimit; i++ ){
        const numArray = getIndividualDigits(i);
        if(parseInt(numArray.pop()) === 0) continue;
        if(isOdd(sum(i,reverseNumber(i)))) {
            resultList.push(i)
            count++;
        }
    }
    console.log(count)
    return resultList;
}

const reverseNumber = (number) => {
    const numArray = getIndividualDigits(number);
    numArray.reverse();
    const reversedNum = numArray.join('');
    
    return parseInt(reversedNum);
}

const isOdd = (number) => {
    const numArray = getIndividualDigits(number);
    for(let num of numArray){
        //parsing the string digit into an integer
        intNum = parseInt(num);
        if(intNum%2 === 0) return false

    }
    return true
}

const sum = (num1, num2) => {
    return num1 + num2;
}

const getIndividualDigits = (number) => {
    numString = number.toString();
    const numArray = numString.split('');
    return numArray;
    
}
console.log(listReversible(1000));