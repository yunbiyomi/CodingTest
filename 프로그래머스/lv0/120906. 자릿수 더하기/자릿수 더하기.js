function solution(n) {
    let hap = 0;
    
    while(n>9){
        hap += n%10;
        n = Math.floor(n/10);
    }
    
    return hap+n;
}