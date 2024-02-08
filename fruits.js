/* function which takes in an array of strings.
The function should then partition the strings into two further arrays:
one which contains the strings with even lengths, and the other one with strings of odd lengths.
The following is an example input/output of the function:
input: ['apple', 'banana', 'orange', 'grape', 'kiwi', 'melon'] // array of strings
output: [['banana', 'orange', 'kiwi'], ['apple', 'grape', 'melon']] // note that an array of arrays is returned
*/
function divideEvenOddLengths(names) {
	return _.partition(names, (name) => { return name.length % 2 === 0; });
}
console.log(divideEvenOddLengths(['apple', 'banana', 'orange', 'grape', 'kiwi', 'melon']));
