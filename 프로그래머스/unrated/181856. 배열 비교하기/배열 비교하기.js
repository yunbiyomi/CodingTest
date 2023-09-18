function solution(arr1, arr2) {
    const hap1 = arr1.reduce((acc, cur) => acc+=cur);
    const hap2 = arr2.reduce((acc, cur) => acc+=cur);
    
    if(arr1.length>arr2.length)
        return 1;
    else if(arr2.length>arr1.length)
        return -1;
    else if(arr1.length===arr2.length){
        if(hap1>hap2)
            return 1;
        else if(hap1<hap2)
            return -1;
        else
            return 0;
    }
}