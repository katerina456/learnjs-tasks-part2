factorial(1); // 1
factorial(2); // 2
factorial(3); // 6
factorial(4); // 24
factorial(5); // 120

function factorial(n) {
    if (n == 1) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}

alert( factorial(5) )
