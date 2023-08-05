function solution(my_string) {
    let hap = 0;
    const numArray = my_string.match(/\d+/g);
    
    if(numArray===null)
        return 0;
    else{
        const hapArray = numArray.map(Number);
        
        for(let i of hapArray)
            hap+=i;

        return hap;
    }
}