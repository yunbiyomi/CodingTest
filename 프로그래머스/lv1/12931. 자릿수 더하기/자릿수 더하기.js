function solution(n)
{
    return String(n).split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}