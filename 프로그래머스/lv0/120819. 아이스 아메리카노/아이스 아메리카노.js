function solution(money) {
    const num = Math.floor(money/5500);
    const don = money%5500;
    return [num, don];
}