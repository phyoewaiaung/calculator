var screenOutput = document.getElementById("output");
var btnClear = document.getElementById("basic-addon2");

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
var liText = "";
function equal() {
  screenOutput.value += "=" + eval(screenOutput.value);
  liText +=
    "<li onclick=\"reShow('" +
    screenOutput.value +
    "')\" value='1'>" +
    screenOutput.value +
    " </li>";
  console.log(liText);

  // document.getElementById("historyValueDisplay").innerHTML = liText;
  // if (
  //   document.getElementById("historyValueDisplay").getElementsByTagName("li")
  //     .length == 4
  // ) {
  //   document.getElementById("historyValueDisplay").innerHTML +=
  //     "<li>See More History</li>";
  // }
}
function showHistory() {
  console.log("hello");
  document.getElementById("historyValueDisplay").innerHTML = liText;
}
function clear() {
  screenOutput.value = "";
}
btnClear.addEventListener("click", clear);
function reShow(text) {
  console.log("click : " + text);
  // var string = Array.from(text);
  // for (var i = 0; i < string.length; i++) {
  //   if (string[i] == "=") {
  //     console.log(string.indexOf("="));
  //     var equalIndex = string.indexOf("=");
  //   }
  //   screenOutput.value = string[equalIndex + 1];
  //   screenOutput.value += string[i];
  // }
  // screenOutput.value = text;
  var eIndex = text.indexOf("=");
  console.log(eIndex);
  screenOutput.value = text.slice(eIndex + 1);
}
