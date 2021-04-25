(function () {
  //main selectors
  const costOfBill = document.getElementById('input-bill')
  const numberOfPeople = document.getElementById('input-users')
  const calculate = document.querySelector('.submitBtn')
  const selectBox = document.querySelector('#input-service')
  const loader = document.querySelector('.loader')
  const results = document.querySelector('.results')
  const tipTotal = document.querySelector('#tip-amount')
  const totalAmount = document.querySelector('#total-amount')
  const eachPersonOwes = document.querySelector('#person-amount')
  const feedback = document.querySelector('.feedback')

  //let newOption = new Option(`Option Text`, `Option Value`)
  const options = [
    {
      serviceLevel: `Great - 20%`,
      tipAmount: .20
    },
    {
      serviceLevel: `Good  - 15%`,
      tipAmount: .15
    },
    {
      serviceLevel: `Bad  - 10% `,
      tipAmount: .10
    }]

    //cant figure out this css "error"
  // function validateInput() {
  //   if (costOfBill == `` || costOfBill <= 0) {
  //     feedback.classList.add('showItem')
  //     feedback.innerHTML = `<p>Amount Must Be Greater Than 0</p>`
  //   }

  // }

  // add options to service level
  options.forEach(option => {
    const newOption = document.createElement('option')
    newOption.textContent = option.serviceLevel
    newOption.value = option.tipAmount
    selectBox.appendChild(newOption)
  })

  //add loading motion
  calculate.addEventListener('click', e => {

    e.preventDefault()
    loader.style.display = 'block'
    setTimeout(function () {
      loader.style.display = 'none'
      calculateEverything()
    }, 3000)
  })

  //get and calculate value of bill
  function calculateEverything() {
    const tipAmount = costOfBill.value * selectBox.value
    const totalAmountOwed = +costOfBill.value + tipAmount //add the + sign to convert to number
    const costPerPerson = totalAmountOwed / +numberOfPeople.value
    results.style.display = `block`
    tipTotal.textContent = tipAmount.toFixed(2)
    totalAmount.textContent = totalAmountOwed.toFixed(2)
    eachPersonOwes.textContent = costPerPerson.toFixed(2)
    loader.style.display = `none`
  }

})()

