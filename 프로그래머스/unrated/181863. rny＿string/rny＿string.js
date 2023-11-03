function solution(rny_string) {
    var answer = '';
    for(let i of rny_string)
        answer += i === "m" ? "rn" : i 
    return answer;
}