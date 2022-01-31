/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
// function isValid(str) {
//     let brackets = "[]{}()<>"
//     let store = []

//     for (let bracket of str) {
//         let indexOfBracket = brackets.indexOf(bracket)

//         if (indexOfBracket % 2 === 0) {
//             store.push(indexOfBracket + 1)
//         } else {
//             if (stack.pop() !== bracketsIndex) {
//                 return invalid;
//             }
//         }
//     }
//     return stack.length === 0
// }


function isValid(str) {
    const openers = "[{(";


    obj = {
        '}': '{',
        ']': '[',
        ')': '('
    }

    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if (openers.includes(str[i])) {
            stack.push(str[i])
        } else {
            let last = stack[stack.length - 1];
            if (obj[str[i]] === last) {
                stack.pop()
            }

        }
    }


    return stack.length ? 'invalid' : 'valid'
}

console.log(isValid(`[(]))`))


module.exports = isValid;
