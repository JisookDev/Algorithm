/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    let index = 0;
    
    while (index < s.length) {        
        if (stack[stack.length - 1] === '(' && s[index] === ')') stack.pop();
        else if (stack[stack.length - 1] === '{' && s[index] === '}') stack.pop();
        else if (stack[stack.length - 1] === '[' && s[index] === ']') stack.pop();
        else stack.push(s[index]);
        index += 1;
    }
    
    return stack.length === 0 ? true : false;
    
};