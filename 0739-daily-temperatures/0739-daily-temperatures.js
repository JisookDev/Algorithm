/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const answer = Array(temperatures.length).fill(0);
    const stack = [];
    temperatures.forEach((temp, day) => {
        while (stack.length !== 0 && stack[stack.length-1].temp < temp){
            const {day: prev_day} = stack.pop();
            answer[prev_day] = day - prev_day;
        }
        stack.push({day, temp});
    });
    
    return answer;
};