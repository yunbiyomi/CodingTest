function solution(strlist) {
    let countArr = [];
    
    for(let i of strlist) {
        let count = 0;
        for(let j of i)
            count++;
        countArr.push(count);
    }
    
    return countArr;
}