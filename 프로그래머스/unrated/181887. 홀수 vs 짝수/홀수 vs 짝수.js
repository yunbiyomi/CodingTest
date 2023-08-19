function solution(num_list) {
    let odd = 0;
    let even = 0;
    
    for(let i in num_list)
        i%2 ? odd+=num_list[i] : even+=num_list[i];
    
    return odd > even ? odd : even;
}