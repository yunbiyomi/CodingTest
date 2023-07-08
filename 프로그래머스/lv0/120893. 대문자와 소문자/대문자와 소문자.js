function solution(my_string) {
    let answer = '';
    
    for(let c of my_string){
        if(c==c.toUpperCase())
            answer+=c.toLowerCase()
        else
            answer+=c.toUpperCase()
    }
    
    return answer;
}