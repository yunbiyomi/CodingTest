function solution(id_pw, db) {
    let answer = '';
    
    for(let i in db){
        if(JSON.stringify(id_pw[0])===JSON.stringify(db[i][0])){
           if(JSON.stringify(id_pw)===JSON.stringify(db[i]))   
               answer = 'login';
            else if(JSON.stringify(id_pw[0])===JSON.stringify(db[i][0]) && JSON.stringify(id_pw[1])!==JSON.stringify(db[i][1]))
                answer = 'wrong pw'
            break;
        }
    
        else
            answer = 'fail';
    }
    
    return answer
}