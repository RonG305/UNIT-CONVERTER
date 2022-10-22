/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/





let inputEl = document.getElementById('input-btn')
let convertBtn = document.querySelector('.converter-btn')
let length = document.getElementById('length-p')
let volume = document.getElementById('volume-p')
let mass = document.getElementById('mass-p') 

 

function convert() {
convertBtn.addEventListener('click', () => {
    if(inputEl.value === '') {
        length.innerHTML, volume.innerHTML, mass.innerHTML = ''
    } else {
        length.innerHTML = `${inputEl.value} meter(s) = ${ (inputEl.value * 3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters`
        volume.innerHTML =`${inputEl.value} liter(s) = ${inputEl.value * 0.264} | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)}liters`
        mass.innerHTML =`${inputEl.value} kilo(s) = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilos`
    
    }
   
    })
}

convert()

