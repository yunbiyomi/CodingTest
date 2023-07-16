function solution(num_list, n) {
    const result = num_list.filter(number => number === n);
    return result.length === 0 ? 0 : 1;
}