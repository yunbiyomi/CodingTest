function solution(num, k) {
    var answer = Array.from(String(num)).findIndex(obj => obj == k);
    return answer == -1 ? -1 : answer+1;
}