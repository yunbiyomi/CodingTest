function solution(n) {
    let hap = 0;
    
    for(let i=1; i<=n; i++){
        let count = 0;
        for(let j=1; j<=i; j++){
            if(i%j===0)
                count++;
        }
        if(count>2)
            hap++;
    }
    
    return hap;
}