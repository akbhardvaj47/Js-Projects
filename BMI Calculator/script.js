function bmi(){
    var h=document.getElementById("height").value;
    var w=document.getElementById("weight").value;
    var total= w/(h/100*h/100);
    total=total.toFixed(2);
    document.getElementById("result").innerHTML="Your BMI is "+ total;
}