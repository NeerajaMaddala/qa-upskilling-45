
let num = 7;
let isPrime = true;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("Given number isPrime");
} else {
    console.log("Given number is Not Prime");
}