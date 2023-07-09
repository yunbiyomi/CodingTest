function solution(my_string) {
    var hap = 0;
    
    const num_string = my_string.replace(/[a-z]/gi,"");
    
    for(let n of num_string)
        hap+=Number(n);
    
    return hap;
}