function solution(order) {
    let hap=0;
    
    order = String(order);
    
    for(let i of order){
        if(i%3==0&&i!=0)
            hap++;
    }
    return hap;
}