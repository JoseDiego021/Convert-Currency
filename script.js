const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValue() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    const dolarToday = 0.1845 * 1
    const euroToday = 0.1567 * 1
    const libraToday = 0.1351 * 1
    const bitcoinToday = 0.0000017 * 1
    const canadenseToday = 0.2509 * 1

    if (currencySelect.value == 'dolar') {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue * dolarToday)
    }

    if (currencySelect.value == 'euro') {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue * euroToday)
    }

    if (currencySelect.value == 'libra') {
        
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue * libraToday)
    }

    if (currencySelect.value == 'bitcoin') {

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC',
            minimumFractionDigits: 2, 
            maximumFractionDigits: 8,
        }).format(inputCurrencyValue * bitcoinToday)
    }

    if ( currencySelect.value == 'canadense') {
        
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'CAD'
        }).format(inputCurrencyValue * canadenseToday)
    }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-image")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Design sem nome 3.png"
    }
    
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/a0fa5b993223b56d3c95277c822d9484d1bc9757.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin 1.png"
    }

    if (currencySelect.value == "canadense") {
        currencyName.innerHTML = "Dólar Canadense"
        currencyImg.src = "./assets/WhatsApp Image 2025-07-05 at 14.46.33.jpeg"
    }
    convertValue()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)