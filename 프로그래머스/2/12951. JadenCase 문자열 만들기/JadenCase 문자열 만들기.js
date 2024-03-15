function solution(s) {
    var answer = s.split(' ');
    return answer.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join(' ');
}