function solution(arr) {
    const min = Math.min.apply(null, arr);
    arr = arr.filter(x => x>min )
    return arr.length ? arr : [-1];
}