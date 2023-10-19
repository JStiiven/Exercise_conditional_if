let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let tarjeta
if(edad >=25){
    alert("Puedes entrar a la fiesta" + " " +nombre);
}
else{
    tarjeta = prompt("¿Tiene tarjeta vip? \n Si o No");
    if(edad >=18 && tarjeta == "si"){
        alert(nombre + " " + "puedes pasar porque tienes VIP")
    }else if (edad >18)
        alert(nombre + " " + "no pasas porque no tienes la edad necesaria")
}