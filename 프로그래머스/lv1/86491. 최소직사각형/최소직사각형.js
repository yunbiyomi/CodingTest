function solution(sizes) {
    let sSize = [];
    let bSize = [];
    
    for(let i=0; i<sizes.length; i++){
        if(sizes[i][0]<=sizes[i][1]){
            sSize.push(sizes[i][0]);
            bSize.push(sizes[i][1]);
        }
        else {
            sSize.push(sizes[i][1]);
            bSize.push(sizes[i][0]);
        }
    }
    
    return Math.max(...sSize) * Math.max(...bSize);
}