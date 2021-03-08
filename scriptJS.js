// @ts-check
let number1 = prompt("Veuillez indiquer un premier nombre à virgule.", "5.82")
number1.replace("," , ".")
parseFloat(number1)
if (Number.isNaN(number1)) {
  alert('Vous devez rentrer un nombre à virgule')
  }
else if (Number.isInteger(number1)) {
  alert('Vous devez rentrer un nombre à virgule')
} 
else { 
  let number2 = prompt("Veuillez indiquer un second nombre à virgule.", "6.45")
  let replacen2 = number2.replace("," , ".")
  if (Number.isNaN(replacen2)) {
    alert('Vous devez rentrer un nombre à virgule')
    }
  else if (Number.isInteger(replacen2)) {
    alert('Vous devez rentrer un nombre à virgule')
    }
  else{
      let convertedN2=parseFloat(replacen2)
      alert("le résultat est : " + parseInt(number1) * convertedN2)
  }}

