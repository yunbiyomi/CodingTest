function solution(array) {
    let numArr = {};
    let answer = 0;
    let max = 0;
    
    for(let i of array){
        
        if(!numArr[i])
            numArr[i]=1;
        else
            numArr[i]++;
        
        if(numArr[i]>max){
            max = numArr[i];
            answer = i;
        }
        
        else if(numArr[i]===max) {
            max = numArr[i];
            answer = -1;
        }
    }
    
    return answer;
}