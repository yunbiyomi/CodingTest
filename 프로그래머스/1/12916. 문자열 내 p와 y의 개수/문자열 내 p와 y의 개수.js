function solution(s){
    let strArr = s.toUpperCase().split('');
    let pHap = 0, yHap=0;
    
    for(let i of strArr){
        if(i==='P')
            pHap++;
        if(i==='Y')
            yHap++;
    }

    return pHap === yHap ? true : false;
}