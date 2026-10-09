let idade= Number (prompt("Digite Sua idade"));

if (idade < 12){
    console.log("É uma criança");
}
    
else if (idade > 18){
    console.log("É um adolecente")
}
else if (idade > 18 && idade <60){
    console.log ("É um adulto")
}
else if (idade >= 60){
    console.log ("É um idoso")
}