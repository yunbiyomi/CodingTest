function solution(array) {
    let counter = 0;
    array=array.toString();
    
    for(let i of array){
        const occ = i.toString().split(7).length-1;
        counter+=occ;
    }
    
    return counter;
}