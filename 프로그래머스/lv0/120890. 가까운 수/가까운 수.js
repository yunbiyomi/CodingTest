function solution(array, n) {
    let min = 9999;
    let answer = 0;
    
    for(let i of array){
        if(Math.abs(n-i) < min){
            min = Math.abs(n-i);
            answer = i;
            
        }
        else if(Math.abs(n-i) === min && i < answer)
            answer = i;
    }
    
    return answer;
}