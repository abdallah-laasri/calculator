"use strict"

var resultBox = document.getElementById('result');
var oneBtn = document.getElementById('one');
var towBtn = document.getElementById('tow');
var threeBtn = document.getElementById('three');
var fourBtn = document.getElementById('four');
var fiveBtn = document.getElementById('five');
var sixBtn = document.getElementById('six');
var sevenBtn = document.getElementById('seven');
var eightBtn = document.getElementById('eight');
var nineBtn = document.getElementById('nine');
var pointBtn = document.getElementById('point');
var deleteBtn = document.getElementById('delete');
var plusBtn = document.getElementById('plus');
var minusBtn = document.getElementById('minus');
var divideBtn = document.getElementById('divide');
var multBtn = document.getElementById('mult');
var equalBtn = document.getElementById('equal');

var isOperatorBtnClicked = false;
var isNumbreBtnClicked = false;
var result;
var numbersArray = [];
var operatorsArray = [];

zero.addEventListener('click', function () {
    if (isOperatorBtnClicked) {
        resultBox.value = "";
        isOperatorBtnClicked = false;
    };
    resultBox.value += "0";
    isNumbreBtnClicked = true;
})
oneBtn.addEventListener('click', function () {
    if (isOperatorBtnClicked) {
        resultBox.value = "";
        isOperatorBtnClicked = false;
    };
    resultBox.value += "1";
    isNumbreBtnClicked = true;
})
towBtn.addEventListener('click', function () {
    if (isOperatorBtnClicked) {
        resultBox.value = "";
        isOperatorBtnClicked = false;
    };
    resultBox.value += "2";
    isNumbreBtnClicked = true;
})
threeBtn.addEventListener('click', function () {
    if (isOperatorBtnClicked) {
        resultBox.value = "";
        isOperatorBtnClicked = false;
    };
    resultBox.value += "3";
    isNumbreBtnClicked = true;
})
fourBtn.addEventListener('click', function () {
    if (isOperatorBtnClicked) {
        resultBox.value = "";
        isOperatorBtnClicked = false;
    };
    resultBox.value += "4";
    isNumbreBtnClicked = true;
})
fiveBtn.addEventListener('click', function () {
    if (isOperatorBtnClicked) {
        resultBox.value = "";
        isOperatorBtnClicked = false;
    };
    resultBox.value += "5";
    isNumbreBtnClicked = true;
})
sixBtn.addEventListener('click', function () {
    if (isOperatorBtnClicked) {
        resultBox.value = "";
        isOperatorBtnClicked = false;
    };
    resultBox.value += "6";
    isNumbreBtnClicked = true;
})
sevenBtn.addEventListener('click', function () {
    if (isOperatorBtnClicked) {
        resultBox.value = "";
        isOperatorBtnClicked = false;
    };
    resultBox.value += "7";
    isNumbreBtnClicked = true;
})
eightBtn.addEventListener('click', function () {
    if (isOperatorBtnClicked) {
        resultBox.value = "";
        isOperatorBtnClicked = false;
    };
    resultBox.value += "8";
    isNumbreBtnClicked = true;
})
nineBtn.addEventListener('click', function () {
    if (isOperatorBtnClicked) {
        resultBox.value = "";
        isOperatorBtnClicked = false;
    };
    resultBox.value += "9";
    isNumbreBtnClicked = true;
})
pointBtn.addEventListener('click', function () {
    if (isOperatorBtnClicked || resultBox.value == "") {
        resultBox.value = "0";
        isOperatorBtnClicked = false;
    };
    resultBox.value += '.';
    isNumbreBtnClicked = true;

})

deleteBtn.addEventListener('click', function () {
    resultBox.value = "";
    numbersArray.length = 0;
    operatorsArray.length = 0;
    result = "";
})

function addition() {
    if (resultBox.value != "") {
        operatorsArray.push("+");
        if (isNumbreBtnClicked) {
            numbersArray.push(parseFloat(resultBox.value));
            isNumbreBtnClicked = false;
        }
        isOperatorBtnClicked = true;
    }
}

function multiplication() {
    if (resultBox.value != "") {

        operatorsArray.push("x");
        if (isNumbreBtnClicked) {
            numbersArray.push(parseFloat(resultBox.value));
            isNumbreBtnClicked = false;
        }
        isOperatorBtnClicked = true;
    }
}

function subtraction() {
    if (resultBox.value != "") {
        operatorsArray.push("-");
        if (isNumbreBtnClicked) {
            numbersArray.push(parseFloat(resultBox.value));
            isNumbreBtnClicked = false;
        }
        isOperatorBtnClicked = true;
    }
}

function division() {
    if (resultBox.value != "") {
        operatorsArray.push("/");
        if (isNumbreBtnClicked) {
            numbersArray.push(parseFloat(resultBox.value));
            isNumbreBtnClicked = false;
        }
        isOperatorBtnClicked = true;
    }
}

function equal() {
    if (resultBox.value != "") {
        numbersArray.push(parseFloat(resultBox.value));
        if (numbersArray.length > operatorsArray.length) {
            for (var i = 0; i < operatorsArray.length; i++) {
                switch (operatorsArray[i]) {
                    case "+":
                        result = numbersArray[i + 1] = numbersArray[i] + numbersArray[i + 1];
                        break;
                    case "x":
                        result = numbersArray[i + 1] = numbersArray[i] * numbersArray[i + 1];
                        break;
                    case "/":
                        result = numbersArray[i + 1] = numbersArray[i] / numbersArray[i + 1];
                        break;
                    case "-":
                        result = numbersArray[i + 1] = numbersArray[i] - numbersArray[i + 1];
                        break;
                }
            }
            resultBox.value = result;
        } else {
            resultBox.value = "ERROR!"
            numbersArray.length = 0;
            operatorsArray.length = 0;
            result = "";
        }
        numbersArray.length = 0;
        operatorsArray.length = 0;
        isOperatorBtnClicked = true;

    }
}

plusBtn.addEventListener('click', addition);
multBtn.addEventListener('click', multiplication);
minusBtn.addEventListener('click', subtraction);
divideBtn.addEventListener('click', division);
equalBtn.addEventListener('click', equal);










window.onload = function () {};