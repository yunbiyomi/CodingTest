function solution(my_string) {
    return my_string.replace(/[a-z]/gi,"").split('').map(Number).sort((a, b)=>a-b);
}