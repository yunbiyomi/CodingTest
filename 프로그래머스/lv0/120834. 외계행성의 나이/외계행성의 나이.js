function solution(age) {
    const ageToNumber = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9 };
    
    const newAge = age.toString().split('');
    
    const ageDigits = newAge.map(digit => {
        return Object.keys(ageToNumber).find(key => ageToNumber[key] === Number(digit));
    });
    
    return ageDigits.join('');
}