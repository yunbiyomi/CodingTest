function solution(t, p) {
    const length = p.split("").length;
    const tSplit = t.split("");
    let tArr = [];
    let count = 0;
    
    for(let i=0; i<tSplit.length-length+1; i++){
        let num = 0;
        for(let j=0; j<length; j++)
            num+=tSplit[i+j];
        tArr.push(Number(num));
    }
    
    for(let i of tArr){
        if(i<=p)
            count++;
    }
    
    return count;
}