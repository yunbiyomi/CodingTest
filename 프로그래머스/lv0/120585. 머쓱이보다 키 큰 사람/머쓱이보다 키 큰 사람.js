function solution(array, height) {
    let count = 0;
    
    for(const i of array) {
        if(i>height)
            count++;
    }
    
    return count;
}