let primtall = [7, 11, 13, 17, 19, 23, 43, 47, 53, 59, 61, 67];
console.log(primtall);

for (let i = 2; i < 100; i++) {
    if (isPrim(i)) {
        primtall.push(i);
    }
}

function isPrim(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(primtall);

for (let i = 0; i < primtall.length; i++) {
    console.log(primtall[i]);
}
