function cal() {
    var a= new Number(document.querySelector("#num1").value);
    var b =new Number(document.querySelector("#num2").value);
    var op = document.querySelector("#operation").value;
    var calculate;

    if(op == "add"){
        calculate = (a+b);
    }else if(op=="subtract"){
        calculate = (a-b);
    }else if(op=="multiply"){
        calculate = (a*b);
    }else if(op=="divide"){
        calculate = (a/b);
    }else if(op=="modules"){
        calculate = (a%b);
    }else if(op=="equal"){
        calculate = (a==b);
    }else if(op=="greater than"){
        calculate = (a>b);
    }else if(op=="less than"){
        calculate = (a<b);
    }else if(op=="greater than or equal to"){
        calculate = (a>=b);
    }else if(op=="less than or equal to"){
        calculate = (a<=b);
    }else if(op=="bitwise AND"){
        calculate = (a & b);
    }else if(op=="bitwise OR"){
        calculate = (a | b);
    }else if(op=="bitwise XOR"){
        calculate = (a^b);
    }else if(op=="bitwise Not"){
        calculate = ~(a);
        calculate = ~(b);
    }

    document.querySelector("#result").innerHTML = calculate;



}