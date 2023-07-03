//CODECADEMY JAVASCRIPT CODING CHALLENGES - final_Grade challenge

// STARTING CODEBASE

// Task 1 - Write a function, finalGrade(). It should:
// take three arguments of type number
// find the average of those three numbers
// return the letter grade (as a string) that the average corresponds to
// return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
// 0-59 should return: 'F'
// 60-69 should return: 'D'
// 70-79 should return: 'C'
// 80-89 should return: 'B'
// 90-100 should return: 'A'

// Write your function here:
const finalGrade = (num1, num2, num3) => {
    if ((num1 < 0 || num1 > 100) || (num2 < 0 || num2 > 100) || (num3 < 0 || num3 > 100)) {
        return 'You have entered an invalid grade.';
    }
    
    let avgNum  = ((num1 + num2 + num3) / 3);

    if (avgNum < 60) {
        return 'F';
    }
    else if (avgNum < 70) {
        return 'D';
    }
    else if (avgNum < 80) {
        return 'C';
    }
    else if (avgNum < 90) {
        return 'B';
    }
    else {
        return 'A';
    }
}




// Testing finalGrade funtion
console.log(finalGrade(99, 92, 95)) // Should print 'A'
console.log(finalGrade(85, 88, 83)) // Should print 'B'
console.log(finalGrade(79, 74, 76)) // Should print 'C'
console.log(finalGrade(68, 64, 62)) // Should print 'D'
console.log(finalGrade(57, 56, 52)) // Should print 'F'
console.log(finalGrade(101, 125, 155)) // Should print 'You have entered an invalid grade.'

// We encourage you to add more function calls of your own to test your code!