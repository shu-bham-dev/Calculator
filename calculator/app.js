var nums;

function calc(value) {
    document.getElementById("textAr").value += value;
    nums += value;
}

function ac() {
    document.getElementById("textAr").value = '';
}

function res() {
    var total = document.getElementById("textAr").value;
    document.getElementById("textAr").value = eval(total);
}