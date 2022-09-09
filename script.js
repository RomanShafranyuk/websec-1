function buttonClickCalculate() {
//    let prevRes = document.getElementById("results").value
   let prevRes = document.getElementById("results")

   let r = document.createElement('div');
   
   r.innerHTML = prevRes.value;
   // console.log(r);
   r.setAttribute('style', 'color: "blue"');
   //prevRes.appendChild(r);
   //console.log(prevRes);
//    el.innerHTML = `<span>Hello world</span>`;
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
    console.log(prevRes.value)
    console.log(r);
    document.getElementById("results").append(r)
    console.log(document.getElementById("results"));
    document.getElementById("results").innerHTML = resultOutput
    
}