function buttonClickCalculate() {
    let selectOperation = document.getElementById("selectOperation");
    console.log(selectOperation.value);
    let lValue = parseFloat(document.getElementById("input_left_number").value);
    let rValue = parseFloat(document.getElementById("input_right_number").value);
    console.log(lValue)
    console.log(rValue)

    let resultOutput = lValue + " " + selectOperation.value + " " + rValue + " = ";
    let result = 0.0;
    switch (selectOperation.value) {
        case "plus":
            result = lValue + rValue;
            break;
        case "minus":
            result = lValue - rValue;
            break;
        case "mult":
            result = lValue * rValue;
            break;
        case "div":
            if (rValue === 0) {
                resultOutput = "Ошибка: деление на ноль";
                result = "";
            }
            else {
                result = lValue / rValue;
            }
            break;
    }

    console.log(selectOperation.value);
    console.log(result)

    resultOutput += result;

    document.getElementById("results").innerText = resultOutput;
}