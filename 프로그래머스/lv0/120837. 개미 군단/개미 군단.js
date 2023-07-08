function solution(hp) {
    let hap = 0;
    
    while(hp>0){
        if(hp>=5){
            hap += Math.floor(hp/5);
            hp = hp%5;
        }  
        else if(hp>=3){
            hap += Math.floor(hp/3);
            hp = hp%3;
        }
        else{
            hap += Math.floor(hp/1);
            hp=0;
        }
        
    }
    
    return hap;
}