function fib(n) {
    if (n == 1 || n == 2) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(45)); // 1134903170 - на числе 45 ответ был выдан с заметной задержкой, большие числа не проверяла