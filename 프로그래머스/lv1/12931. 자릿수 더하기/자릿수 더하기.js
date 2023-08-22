function solution(n)
{
    let answer = 0;

    while(n>9){
        answer+=n%10;
        n=Math.floor(n/10);
    }
    
    return answer+n;
}