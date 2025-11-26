const inputNum = document.getElementById("inputNum")
const btn = document.getElementById("btn")
const lengthResult = document.getElementById("lengthResult")
const volumeResult = document.getElementById("volumeResult")
const massResult = document.getElementById("massResult")

const oneMeter = 3.281
const oneFeet = 0.305
const oneLiter = 0.264
const oneGallon = 3.785
const oneKilos = 2.204
const onePound = 0.453

btn.addEventListener("click", function() {
    let totalFeet = oneMeter * inputNum.value 
    let totalMeter = oneFeet * inputNum.value
    let totalLiter = oneGallon * inputNum.value
    let totalGallon = oneLiter * inputNum.value
    let totalKilos = onePound * inputNum.value
    let totalPounds = oneKilos * inputNum.value
    lengthResult.innerHTML = `${inputNum.value} meters = ${totalFeet.toFixed(3)} feet | ${inputNum.value} feet = ${totalMeter.toFixed(3)} meters`
    volumeResult.innerHTML = `${inputNum.value} liters = ${totalGallon.toFixed(3)} gallons | ${inputNum.value} gallons = ${totalLiter.toFixed(3)} liters `
    massResult.innerHTML = `${inputNum.value} kilos = ${totalPounds.toFixed(3)} pounds | ${inputNum.value} pounds = ${totalKilos.toFixed(3)} kilos`
})