function solution(my_string, letter) {
    my_string = my_string.split(letter).filter(item => item !== '').join('');
    
    return my_string;
}