function solution(n) {
    var answer = [];
    
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            answer.push(i);
            n /= i;
        }
    }
    
    answer = [...new Set(answer)];

    return answer;
}