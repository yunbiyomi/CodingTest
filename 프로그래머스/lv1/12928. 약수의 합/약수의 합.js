function solution(n) {
    let hap = 0;
    
    for(let i = 1; i <= n; i++){
        if(n%i===0)
            hap += i;
    }
    
    return hap;
}