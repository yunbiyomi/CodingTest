function solution(s) {
    let arr = s.split("");
    let mid = arr.length % 2 ? Math.floor(arr.length/2) : arr.length/2;
    
    if(arr.length % 2)
        return arr[mid];
    else
        return arr[mid-1]+arr[mid];
}