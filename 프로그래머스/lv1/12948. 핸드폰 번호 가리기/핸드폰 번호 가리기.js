function solution(phone_number) {
    var answer = phone_number.split('');
    
    for(let i = 0; i<answer.length-4; i++){
        answer[i] = "*"
    }
    return answer.join('');
}