function countOne(num) {
    let count = 0
    let arr = num.toString(2).split('');
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) { count++; }
    }
    return count; 
}

function solution(n) {
    let testNum = n;
    while(true) {
        testNum++; 
        if(countOne(testNum) == countOne(n)) return testNum;
    }
}