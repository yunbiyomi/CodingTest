function solution(x, n) {
    var answer = [];
    
    if(x>0){
        for(let i=x; i<=x*n; i+=x)
        answer.push(i);
    }
    
    if(x===0){
        for(let i=0; i<n; i++)
        answer.push(0);
    }
    
    else {
        for(let i=x; i>=x*n; i-=Math.abs(x))
        answer.push(i);
    }
    
    return answer;
}