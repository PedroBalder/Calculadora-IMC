function calcularImc(){
    var altura=document.getElementById("altura").value/100;
    var peso=document.getElementById("peso").value;

    var imc=peso/(altura)**2;
    console.log(imc);

    if(imc< 18.5){
        window.alert("Magreza!");
    } else if(imc < 24.9){
        window.alert("Saudável!");
    } else if(imc < 29.9 ){
        window.alert("Sobrepeso!");
    } else if(imc < 34.9){
        window.alert("Obesidade gau I");
    } else if(imc < 39.9){
        window.alert("Obesidade grau II");
    } else if(imc > 39.9){
        window.alert("Obesidade móbida!")
    }
}