function solution(a, b) {
    let hap = 0;
    for(let i in a)
        hap+=a[i]*b[i];
    return hap;
}