function solution(rsp) {
    let answer=[];
    
    rsp = rsp.split('');
    
    for(i of rsp){
        if(i==2) answer.push(0);
        else if(i==0) answer.push(5);
        else if(i==5) answer.push(2);
    }
    
    answer = answer.join('');

  return answer;
}