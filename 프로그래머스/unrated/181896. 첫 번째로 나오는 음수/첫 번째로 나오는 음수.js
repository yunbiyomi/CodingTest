function solution(num_list) {
    let count = 0;
    
    for(let i in num_list){
        if(num_list[i]<0){
            count++;
            return Number(i);
        }
    }
    
    if(count===0)
        return -1;
}