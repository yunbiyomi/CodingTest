function solution(numbers) {
    let hap=0;
    
    numbers.forEach((number) => hap += number);
    
    return hap/numbers.length;
}