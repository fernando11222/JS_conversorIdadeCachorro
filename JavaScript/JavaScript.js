id1 = parseFloat(prompt('Digite a idade do seu cachorro: '))
if (id1 <= 2){
    idade = id1*5.25
}else if (id1 > 2){
    idade = (id1-2)*4+10.5
}
document.write(`A idade humana do cachoro é de: ${idade}`)