// About the various operations of Array in Java Script

// Array length(),Array delete(),Array toString(),Array concat(),
// Array at(),Array copyWithin(),Array join(),Array flat(),Array pop(),Array slice(),Array push(),
// Array splice(),Array shift(),Array toSpliced(),Array unshift();

let array_A = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
let array_a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

// For the length of the array A
// let A = array_A.length;
// let B = array_a.length;
// console.log(A);
// console.log(B);

// To find out the length of a given array
// let size = array_A.length;
// console.log(size);

// For the delete the array
// delete array_A[0];
// console.log(array_A);

// Array toString
// let string_A = array_A.toString();
// console.log(string_A);

// Array  concat(): to add the array to another array
// let AddingAB = array_A.concat(array_a);
// console.log(AddingAB);

// Array at()--- Array starts from the 0 index
// let small_a = array_a.at(3);
// console.log(small_a);

// Array pop() removes the last element of the array--> This will show the removed element
// let Remove_l = array_A.pop();
// console.log(Remove_l);

// Array push() add the element to the array at last
// array_a.push("l","m","n");
// console.log(array_a);

// Array slice()---This will slice(remove) the element from the 1 to 5(excluding 5);it makes new array while performing
// let cut = array_A.slice(1, 5);
// console.log(cut);

// Array splice()---This is used to add or remove the array elements
// This will add the element in the 2 index and the other elements after that is removed  and the fourth element is changed to "n" and the original array is continued
// array_a.splice(2, 4, "m", "n");
// console.log(array_a);

// Array toSpliced()---This makes the copy of original array and and others are same as splice()
// let To_splice = array_A.toSpliced(2, 4, "a", "b");
// console.log(To_splice);

// Array shift()--->This removes the first element of the array --->This shift the array by the index of one
// array_A.shift();
// console.log(array_A);

// Array copyWithin()----> copies the item of the array to the desires place
// array_A.copyWithin(3, 0);
// console.log(array_A);
// This line tells to index "3" copy to index from and paste the elements form "0" to "4"
// array_a.copyWithin(3, 0, 4);
// console.log(array_a);

// Array Join()--- is used to return array as string and the separator can be specified,
// text = array_a.join("   ");
// console.log(text);

// Array flat()---- is used with multidimensional array to reduce it to the one dimensional array
