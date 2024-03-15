function solution(s) {
    var arr = s.trim().split(' ');
    return Math.min(...arr) + ' ' + Math.max(...arr);
}