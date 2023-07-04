function solution(sides) {
    var answer = 0;
    let max = 0;
    let num = 0;
    
    for(const i in sides){
        if(sides[i]>max){
            max = sides[i];
            num = i;
        }
    }
    
    for(const i in sides){
        if(i!=num)
            answer+=sides[i]
    }
    
    if (max<answer)
        return 1;
    else
        return 2;
}