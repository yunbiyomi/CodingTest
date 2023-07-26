function solution(before, after) {
    const newBefore = before.toUpperCase().split('').sort().join('');
    const newAfter = after.toUpperCase().split('').sort().join('');
    
    if(newBefore === newAfter)
        return 1;
    else
        return 0;
}