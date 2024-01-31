function solution(arr, query) {
     for(let i in query) {
        const cur = query[i]
        
        if(i%2 === 0) 
            arr.splice(cur+1, arr.length -(cur+1))
        else 
             arr.splice(0, cur)
    }
    
    return arr
}