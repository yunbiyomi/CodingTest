function solution(i, j, k) {
    let counter = 0;
    k = k.toString();
    
    for(let n=i; n<=j; n++){
        const occ = n.toString().split(k).length - 1;
        counter+=occ;
    }
    
    return counter;
}