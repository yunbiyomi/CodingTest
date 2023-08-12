function solution(num_str) {
    let arr = num_str.split('')
    let hap = 0;
    
    for(let i of arr){
        hap+=Number(i);
    }
    
    return hap;
}