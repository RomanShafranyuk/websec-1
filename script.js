function buttonClickCalculate() {
//    let prevRes = document.getElementById("results").value
   let prevRes = document.getElementById("results")

   let r = document.createElement('div');
   r.innerHTML = prevRes.value;
   
   prevRes.append(r);
   
    let selectOperation = document.getElementById("selectOperation");
  
    let lValue = parseFloat(document.getElementById("input_left_number").value);
    let rValue = parseFloat(document.getElementById("input_right_number").value);
   

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

   
   

    resultOutput += result +"\n";
    
    document.getElementById("results").innerHTML = prevRes.value + resultOutput;
    
}