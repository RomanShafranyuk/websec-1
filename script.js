function buttonClickCalculate() {
    let selectOperation = document.getElementById("selectOperation");
    let lValue = parseFloat(document.getElementById("input_left_number").value);
    let rValue = parseFloat(document.getElementById("input_right_number").value);

    if (isNaN(lValue) || isNaN(rValue)) {
        alert("Поля ввода не должны быть пустыми!");
        return;
    }

    let prevResField, resField;
    prevResField = document.getElementById("prevRes");
    resField = document.getElementById("result");

    let resultOutput = lValue + " " + selectOperation.value + " " + rValue + " = ";
    let result = 0.0;
    switch (selectOperation.value) {
        case "+":
            result = lValue + rValue;
            break;
        case "-":
            result = lValue - rValue;
            break;
        case "*":
            result = lValue * rValue;
            break;
        case "/":
            if (rValue === 0) {
                resultOutput = "Ошибка: деление на ноль";
                result = "";
            }
            else {
                result = lValue / rValue;
            }
            break;
    }




    resultOutput += result;

    prevResField.innerText = resField.innerText;
    resField.innerText = resultOutput;



}