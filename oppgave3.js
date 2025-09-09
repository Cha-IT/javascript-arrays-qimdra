function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

let myArray = [1, 2, 3, 4, 5];
reverseArray(myArray);
console.log(myArray);