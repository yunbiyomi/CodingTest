function solution(numbers) {
    const base = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return base.filter(x => !numbers.includes(x)).reduce((a, b) => a+b);
}