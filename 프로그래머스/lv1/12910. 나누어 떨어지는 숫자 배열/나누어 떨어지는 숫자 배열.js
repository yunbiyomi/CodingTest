function solution(arr, divisor) {
    let answer = [];

    for(let i of arr){
        if(i%divisor===0)
            answer.push(i);
    }
    
    answer.length===0 ? answer.push(-1) : answer.sort((a, b) => a-b);
    
    return answer;
}