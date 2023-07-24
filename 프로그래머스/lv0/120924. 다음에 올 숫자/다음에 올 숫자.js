function solution(common) {
    if(common[1] - common[0] === common[2] - common[1])
        return common[common.length-1]+(common[1] - common[0]);
    
    else if(Math.floor(common[1] / common[0]) === Math.floor(common[2] / common[1]))
        return common[common.length-1] * (common[1] / common[0]);               
}
