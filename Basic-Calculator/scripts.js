


expression = "";

function clearFunction() {
    document.getElementById("input").value = "";
    expression = "";
}

function cancelFunction() {
    element = document.getElementById("input");
    content = element.value.substring(0,element.value.length-1);
    element.value = content;
    expression = content;
}

function putVal(val) {
    expression += '' + val;
    document.getElementById("input").value = expression;
}



function solveExpression() {
    expression = expression.replaceAll("x", "*");
    ans = eval(expression);
    document.getElementById("input").value = ans;
    expression = ans;
    console.log(expression)
}