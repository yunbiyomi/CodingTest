function solution(todo_list, finished) {
    var answer = [];
    
    for(let i in todo_list){
        if(finished[i] === false)
            answer.push(todo_list[i]);
    }
    
    return answer;
}