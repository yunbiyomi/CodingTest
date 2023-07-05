function solution(num_list) {
    let even = 0;
    let odd = 0;
    
    for(const num of num_list){
        num%2===0 ? even++ : odd++;
    }
    
    let arr = [];
    arr.push(even);
    arr.push(odd);
    
    return arr;
}