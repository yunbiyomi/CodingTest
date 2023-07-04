function solution(strlist) {
    var answer = [];
    
    for(i=0;i<strlist.length;i++){
        answer[i] = strlist[i].length;
    }
    return answer;
}