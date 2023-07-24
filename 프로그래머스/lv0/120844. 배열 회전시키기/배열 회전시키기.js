function solution(numbers, direction) {
    if (direction === "right") {
        const num = numbers[numbers.length-1];
        for(let i=numbers.length-1; i>0; i--) {
            numbers[i] = numbers[i-1];
        }
        numbers[0] = num;
    }
    
    else {
        const num = numbers[0];
        for(let i=0; i<numbers.length; i++) {
            numbers[i] = numbers[i+1];
        }
        numbers[numbers.length-1] = num;
    }
    
    return numbers;
}