function solution(n) {
    let i = 0;
    while(i<n){
        i++;
        n/=i;
    }
    return i;
}