var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var total_text = "";

function isadd(value){
    if ( (value==="ac") || (value==="=") || (value==="+/-")){
        return false;
    }
    return true;
}
for (var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        console.log(value);
        console.log(isadd(value));
        if (isadd(value)) {
            total_text+=value;
        }
        else if (value==="+/-"){
            total_text = eval(total_text);
            total_text*=-1;
        }
        else if (value==="ac") {
            total_text = "";
        }
        else if (value==="="){
            // let math = require('mathjs');
            total_text = eval(total_text);
        }
        if (!(total_text)){
            display.textContent = "";
        }
        else{
            display.textContent = total_text;
        }
    })
}
