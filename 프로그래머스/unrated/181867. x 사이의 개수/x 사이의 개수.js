function solution(myString) {
    const standard = myString.split("x")
    let answer = [];
    
    for(let i of standard)
        answer.push(i.length);
    
    return answer;
}