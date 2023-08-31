function solution(absolutes, signs) {
    let hap = 0;
    for(let i in absolutes) {
        if(signs[i])
            hap+=absolutes[i];
        else
            hap+=-absolutes[i];
    }
    return hap;
}