/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    const newM = array[0].length//5
    const newN = array.length//3
    let newArray = []


    //turn an m x n array into a n x m array
    for (let i = 0; i < newM; i++) {
        let newEntry = []
        for (let j = 0; j < newN; j++) {
            newEntry.push(array[j][i])
        }
        newArray[i] = [...newEntry]
    }
    return newArray
}

console.log(transpose([
    [5, 12, 17, 9, 3],
  [13, 4, 8, 14, 1],
  [9, 6, 3, 7, 21],
]))



//m =vertical(3) ,n= horizontal(5)

// [
//     [5, 13, 9],
//     [12, 4, 6],
//     [17, 8, 3],
//     [9, 14, 7],
//     [3, 1, 21],
//   ];
//m =vertical(5) ,n= horizontal(3)

module.exports = transpose;
