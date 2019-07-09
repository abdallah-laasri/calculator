"use strict"

var resultBox = document.getElementById('result');
var pointBtn = document.getElementById('point');
var deleteBtn = document.getElementById('delete');
var equalBtn = document.getElementById('equal');

var isOperatorBtnClicked = false;
var isNumbreBtnClicked = false;
var result = "";
var numbersArray = [];
var operatorsArray = [];

function dumpoutResultBox() {
    if (isOperatorBtnClicked) {
        resultBox.value = "";
        isOperatorBtnClicked = false;
    };
}

function dumpoutArrays() {
    numbersArray.length = 0;
    operatorsArray.length = 0;
    result = "";
}

function pushNewNumber() {
    if (isNumbreBtnClicked) {
        numbersArray.push(parseFloat(resultBox.value));
        isNumbreBtnClicked = false;
    }
    isOperatorBtnClicked = true;
}

// Add clicked button value to text box
var nbrBtnTable = [];
nbrBtnTable = document.querySelectorAll('.nbrBtn');
nbrBtnTable.forEach(function (x) {
    x.addEventListener('click', function () {
        dumpoutResultBox();
        resultBox.value += x.value;
        isNumbreBtnClicked = true;
    })
});

// push clicked button value to operatorsArray + push number to numbersArray
var operBtnTable = [];
operBtnTable = document.querySelectorAll('.operBtn');
operBtnTable.forEach(function (x) {
    x.addEventListener('click', function () {
        if (resultBox.value != "") {
            operatorsArray.push(x.value);
            pushNewNumber();
        }
    })
});

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
    dumpoutArrays();
})


function equal() {
    if (resultBox.value != "") {
        numbersArray.push(parseFloat(resultBox.value));
        if (numbersArray.length > operatorsArray.length) {
            operatorsArray.map((item, index) =>
                result += numbersArray[index] + item
            );
            resultBox.value = (eval(result + numbersArray[numbersArray.length - 1])).toLocaleString();
        } else {
            resultBox.value = "ERROR!"
            dumpoutArrays();
        }
        dumpoutArrays();
        isOperatorBtnClicked = true;
    }
}

equalBtn.addEventListener('click', equal);
