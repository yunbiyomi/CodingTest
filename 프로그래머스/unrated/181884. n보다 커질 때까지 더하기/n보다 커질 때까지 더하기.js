function solution(numbers, n) {
    let hap = 0;
    
    for(let i of numbers){
        hap+=i;
        if(hap>n)
            return hap;
    }
}