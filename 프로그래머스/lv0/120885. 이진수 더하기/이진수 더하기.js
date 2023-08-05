function solution(bin1, bin2) {
    let b1 = parseInt(bin1, 2);
    let b2 = parseInt(bin2, 2);
    const hap = b1+b2;
    return hap.toString(2);
}