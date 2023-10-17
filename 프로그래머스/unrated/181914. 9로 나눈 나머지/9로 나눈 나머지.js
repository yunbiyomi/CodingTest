function solution(number) {
    const arr = number.split("");
    let hap = 0;
    
    for(i of arr){
        hap += Number(i);
    }
    
    return hap%9;
}