function solution(array) {
    const max = [...array].sort((a,b)=>b-a)[0];
    
    for(let i=0; i<array.length; i++){
        if(array[i]==max)
            return [max,i];
    }
    
}