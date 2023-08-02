function solution(num_list) {
    let even = [];
    let odd = [];
    
    for(let i of num_list){
        i%2===0 ? even.push(i) : odd.push(i);
    }
    
    return Number(even.join(''))+Number(odd.join(''));
}