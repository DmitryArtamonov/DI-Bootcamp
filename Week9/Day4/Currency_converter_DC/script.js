const container = document.getElementById('result')
const convertButton = document.getElementById('convert_button')
const fromSelect = document.getElementById('from')
const toSelect = document.getElementById('to')
const amountInput = document.getElementById('amount')
const resultDiv = document.getElementById('result')

convertButton.addEventListener('click', convert)

addCurrency()

// Fetching function

async function fetchingFunc(url) {

    try{
        request = await fetch(url)
        if (request.ok){
            result = await request.json()
            return result
        } else {
            throw Error
        }

    } catch(err) {
        return false
    }

}

async function addCurrency() {
    let data = await fetchingFunc('https://v6.exchangerate-api.com/v6/4dd15ab3b6bf75ba324d6f68/codes')
    let currencies = data.supported_codes
    let newOption
    currencies.forEach(currency => {
        [fromSelect, toSelect].forEach(select => {
            newOption = document.createElement('option')
            newOption.value = currency[0]
            newOption.textContent = currency[1]
            select.appendChild(newOption)
        })

    });
}




async function convert(event){
    event.preventDefault()
    resultDiv.removeChild(resultDiv.firstChild)

    let from = fromSelect.value
    let to = toSelect.value
    let amount = amountInput.value

    let url = `https://v6.exchangerate-api.com/v6/4dd15ab3b6bf75ba324d6f68/pair/${from}/${to}/${amount}`
    let data = await fetchingFunc(url)
    let result = data.conversion_result

    let h2 = document.createElement('h2')
    h2.textContent = result
    resultDiv.appendChild(h2)

}