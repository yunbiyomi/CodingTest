function solution(numbers) {
    let hap=0;
    
    numbers.forEach((number) => hap += number);
    
    const answer = hap/numbers.length;
    
    return answer;
}