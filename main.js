let display = document.getElementById("display");
let button = document.getElementsByClassName("button");
let value = button.innerHTML;

function clickbutton(value) {
  
  if(!isNaN(value)){

    if(display.innerHTML == "0"){
        display.innerHTML = value;
    }else{
        display.innerHTML += value;
    }
    // 記号
  }else{
      // リセット
    if(value == "AC"){
      display.innerHTML = "0"

      // イコール
    }else if (value == "="){
      display.innerHTML = eval(display.innerHTML)

      // その他記号
    }else{

      // /記号の上書き
      if(display.innerHTML.slice(-1) === "/" ){
        display.innerHTML.slice(-1) = "/"
      }
      if(display.innerHTML.slice(-1) === "*" ){
        display.innerHTML.slice(-1) = "*"
      }
      if(display.innerHTML.slice(-1) === "-" ){
        display.innerHTML.slice(-1) = "-"
      }
      if(display.innerHTML.slice(-1) === "+" ){
        display.innerHTML.slice(-1) = "+"
      }
      if(display.innerHTML.slice(-1) === "." ){
        display.innerHTML.slice(-1) = "."
      }
      display.innerHTML += value;
    }
  }
}
