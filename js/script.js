function num2() {
    let num = parseFloat(document.getElementById("input_number").value);
    document.getElementById("output").innerHTML = (num).toString(2);
}

function num8() {
    let num = parseFloat(document.getElementById("input_number").value);
    document.getElementById("output").innerHTML = (num).toString(8);
}

function num10() {
    let num = parseFloat(document.getElementById("input_number").value);
    document.getElementById("output").innerHTML = parseInt(num, 2);
}

function num16() {
    let num = parseFloat(document.getElementById("input_number").value);
    document.getElementById("output").innerHTML = (num).toString(16);
}
