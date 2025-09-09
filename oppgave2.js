// 2a
function RandomNumbers(arr, num) {
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
}
// 2b
let numbers = [];
RandomNumbers(numbers, 50);
console.log("Original array:", numbers);

// 2c
numbers.sort((a, b) => b - a);
console.log("Sorted descending:", numbers);

// 2d
let largest = numbers[0];
let smallest = numbers[numbers.length - 1];
console.log("Largest number:", largest);
console.log("Smallest number:", smallest);

// 2e
function removeEven(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            arr.splice(i, 1);
        }
    }
}

removeEven(numbers);
console.log("Array with even numbers removed:", numbers);

