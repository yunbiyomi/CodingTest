function solution(strArr) {
    var answer = [];
    
    for(let i in strArr) {
        answer.push(i%2 ? strArr[i].toUpperCase() : strArr[i].toLowerCase());
    }
    
    return answer;
}