setInterval(function () {
    alert("Please, use me..."); 
    }, 30000);

function calcula() {
    
    var num1 = parseFloat(document.getElementById('input1').value);
    var num2 = parseFloat(document.getElementById('input2').value);
    var op = document.getElementById('operator').value;
    var result = 0;

    if (num1 >= 0 && num2 >= 0 && Number.isInteger(num1) && Number.isInteger(num2)) {
        if (op == '+') {
            result = num1 + num2;
        } else if (op == '-') {
            result = num1 - num2;
        } else if (op == '*') {
            result = num1 * num2;
        } else if (op == '/') {
            if(num2 == 0) {
                alert("It's over 9000!");
                console.log("infinty");
                return;
            } else {
                result = num1 / num2;
            }
        } else if (op == '%') {
            if(num2 == 0) {
                alert("It's over 9000!");
                console.log("infinty");
                return;
            } else {
                result = num1 % num2;
            }
        }
        alert(result);
        console.log("resultado: " +result);
    }
    else {
        alert("Error :(");
    }
    
}