function solution(num_list) {
    let hap = 0;
    let multiple = 1;
    
    for(let i of num_list){
        hap+=i;
        multiple*=i;
    }
    
    return multiple > Math.pow(hap, 2) ? 0 : 1;
}