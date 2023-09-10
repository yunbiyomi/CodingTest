function solution(n, m) {
    let maxGong = 0;
    
    if(n<m){
        for(let i=1; i<=m; i++){
            if(n%i===0 && m%i===0)
                maxGong=i;
        }
    }
    else{
        for(let i=1; i<=n; i++){
            if(n%i===0 && m%i===0)
                maxGong=i;
        }
    }
    
    let minGong = maxGong * (n/maxGong) * (m/maxGong);
    
    return [maxGong, minGong];
}