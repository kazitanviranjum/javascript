function sum(num1, num2) {
    document.write(num1 + num2);
  }

function diff(num1, num2) {
    document.write(num1 - num2);
  }

function mult(num1, num2) {
    document.write(num1 * num2);
  }

function div(num1, num2) {
    document.write(num1 / num2);
  }
  function mod(num1, num2) {
    document.write(num1 % num2);
  }
 
  
  sum(5,5) ;document.write('<br>')
  diff(5,5) ;document.write('<br>')

  mult(5,5) ;document.write('<br>')
  div(5,5) ;document.write('<br>')
  mod(5,5) ;document.write('<br>')
  document.write('<br>')
  
var arr = ["Jack", "John", "James"];

for(var i = 0; i < arr.length; i++){
    document.write(arr[i] + '<br>');
}
document.write('<br>')
  
var num = [1,2,3,4,5,6,7,8,9];

document.write('even numbers are'+'<br>');
for (var i = 1 ; i < 10 ; i += 2 ) {
    document.write(i+'<br>');
}


document.write('odd numbers are '+'<br>');
for (var i = 2 ; i < 10 ; i += 2 ) {
    document.write(i+'<br>');
}
  
  
  
  
  function generateOption(selector,minValue, maxValue) {
    var jsSelector = document.getElementById(selector);
    
  
    for (var i = minValue; i <= maxValue; i++) {
      var option = document.createElement("option");
      var optionText = document.createTextNode(i);
  
      option.appendChild(optionText);
      jsSelector.appendChild(option);
    }
  }
  
  function generateoption(selector, maxValue, minValue) {
    var jsSelector = document.getElementById(selector);
    
  
    for (var i = maxValue; i >=minValue ; i--) {
      var option = document.createElement("option");
      var optionText = document.createTextNode(i);
  
      option.appendChild(optionText);
      jsSelector.appendChild(option);
    }
  }
  
  
  generateOption('day',1,31)
  generateOption('month',1,12)
  generateoption('year',2022, 1950)