// @ts-check
let number1 = prompt("Veuillez indiquer un premier nombre décimal.", "5.82")
let number2 = prompt("Veuillez indiquer un second nombre décimal.", "6.45")
let regex = /^[0-9]+\.[0-9]+$/
if (regex.test(number1) && regex.test(number2))
{
    alert("le résultat est : " + parseInt(number1) * parseFloat(number2))
}
else
{
    alert("Les valeurs ne sont pas des nombres décimaux")
}

