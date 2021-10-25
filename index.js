var nota = parseFloat(prompt('Informe a sua nota atual'))

if(nota >= 6.0 && nota <= 10){   
  alert('Você está Aprovado')
}
else if(nota < 6.0 && nota >=0){
 alert('Você está reprovado')
}
else{
  alert('Nota inválida')
}
