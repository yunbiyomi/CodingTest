function solution(d, budget) {
    const list = d.sort((a,b) => a-b);
    let count = 0;
    
    for(let i of list){
        budget-=i;
        
        count = budget < 0 ? count : count+1;
    }
    
    return count;
}