function solution(n) {
    const str = '수박';
    
    return n%2 ? str.repeat(Math.floor(n/2))+'수' : str.repeat(Math.floor(n/2));
}