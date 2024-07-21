let num = document.getElementById("inpBox");
let button = document.querySelectorAll(".btn");

let str = "";
let arr = Array.from(button);

arr.forEach(btn =>{
    btn.addEventListener('click', (evt) => {
        if(evt.target.innerHTML == '='){
            str = eval(str);
        }
        else if(evt.target.innerHTML == 'DEL'){
            str = str.substring(0, str.length-1);
        }
        else if(evt.target.innerHTML == 'AC'){
            str = "";
        }
        else {
            str = str + evt.target.innerHTML;
        }
        num.value = str;
    })
})