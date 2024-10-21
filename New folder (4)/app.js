var input=document.getElementById("input")//global variable

function getValue(number) {
    input.value += number  ;
  }
  
  function clearall() {
    input.value = " ";
  }

  function deleteCh() {
    input.value = input.value.slice(0, -1);
  }
  
  function square() {
    input.value = input.value * input.value;
  }
  
  function answer() {
      input.value = eval(input.value);
    }

  if (!input.value) {
    input.value = "syntax error";
  } else {
    input.value = eval(input.value);
  }
  
