function solution(myString) {
    const str = myString.split("");
    let answer = "";
    
    for(let i of str) {
        answer += i.charCodeAt() < 108 ? "l" : i;
    }
    
    return answer;
}