function solution(balls, share) {
    let n = 1;
    let m = 1;
    
    for(let i = balls; i > balls-share; i--){
        n *= i;
    }
    
    for(let i = share; i > 1; i--){
        m *= i;
    }
    
    return n/m;
}