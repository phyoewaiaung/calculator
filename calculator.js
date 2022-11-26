var screenOutput = document.getElementById("output");
var btnClear = document.getElementById("basic-addon2");
let history = document.querySelector("#history");
let hsClear = document.querySelector("#his-clear");

var num1 = "";
var num2 = "";
var total = 0;
var opr = "";

function one() {
  screenOutput.value += "1";
}
function two() {
  screenOutput.value += "2";
}
function three() {
  screenOutput.value += "3";
}
function divide() {
  screenOutput.value += "%";
}

function four() {
  screenOutput.value += "4";
}
function five() {
  screenOutput.value += "5";
}

function six() {
  screenOutput.value += "6";
}

function multiply() {
  screenOutput.value += "*";
}
function seven() {
  screenOutput.value += "7";
}
function eight() {
  screenOutput.value += "8";
}
function nine() {
  screenOutput.value += "9";
}

function minus() {
  if (screenOutput.value == "") {
    screenOutput.value == "";
  } else {
    screenOutput.value += "-";
  }
}

function doubleZero() {
  if (screenOutput.value == "") {
    screenOutput.value += "";
  } else {
    screenOutput.value += "00";
  }
}
function zero() {
  if (screenOutput.value == "") {
    screenOutput.value += "";
  } else {
    screenOutput.value += "0";
  }
}
function plus() {
  if (screenOutput.value == "") {
    screenOutput.value += "";
  } else {
    screenOutput.value += "+";
  }
}

function equal() {
  screenOutput.value += "=" + eval(screenOutput.value);
  let li = document.createElement("li");
  li.innerText = screenOutput.value;
  history.append(li);
}

btnClear.addEventListener("click", ()=> {
  screenOutput.value = ""
});

hsClear.addEventListener("click", () => {
  history.innerText = "";
})
