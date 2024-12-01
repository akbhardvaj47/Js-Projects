
function clrAll(){   
    //it will clear all values from input field
    document.getElementById("input").value="";
}


function clr(){     
    //It will clear value one by one from input field by slice function
    document.getElementById("input").value=document.getElementById("input").value.slice(0,-1);
}


function display(val){  
    //It will concatenate value to input field
    document.getElementById("input").value+=val;
}


function calculate(){  
    //It will solve all exp from input by eval function
    var x = document.getElementById('input').value;
    var y= eval(x);
    document.getElementById("input").value=y;
}
