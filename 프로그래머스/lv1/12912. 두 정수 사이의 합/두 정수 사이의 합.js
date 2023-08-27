function solution(a, b) {
    let hap = 0;
    
    if(a<b){
        for(let i=a; i<=b; i++)
        hap+=i;
    }
    else {
        for(let i=b; i<=a; i++)
        hap+=i;
    }
    
    return hap;
}