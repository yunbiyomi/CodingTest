function solution(n) {
    let min = n > 6 ? 6 : n;
    let gong = 1;
    
    for(let i=1; i<=min; i++){
        if(n%i===0 && 6%i===0){
            gong = i;
        }
    }

    return n/gong;
}