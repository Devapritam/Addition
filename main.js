function add(num1, num2) {
    result = parseInt(num1 + num2);
    document.getElementById("result").innerHTML = "Result = " + result;
}

function sum() {
    firstNum = parseInt(document.getElementById("firstNum").value);
    secondNum = parseInt(document.getElementById("secondNum").value);
    add(firstNum, secondNum);
}