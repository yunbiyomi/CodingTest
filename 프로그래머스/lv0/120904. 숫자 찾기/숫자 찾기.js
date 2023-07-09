function solution(num, k) {
    if(Array.from(String(num)).findIndex(obj => obj == k)==-1)
        return -1;
    else
        return Array.from(String(num)).findIndex(obj => obj == k)+1;
}