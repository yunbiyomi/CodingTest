function solution(str_list, ex) {
    let answer = '';
    for(let i of str_list){
        if(i.indexOf(ex)===-1)
            answer+=i;
    }
    
    return answer;
}