function solution(x) {
    let harshad = String(x).split("").map(Number).reduce((a, b) => a+b);
    return x%harshad ? false : true;
}