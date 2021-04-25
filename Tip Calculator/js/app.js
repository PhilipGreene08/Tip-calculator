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


  // add options to service level
  options.forEach(option => {
    const newOption = document.createElement('option')
    newOption.textContent = option.serviceLevel
    newOption.value = option.tipAmount
    selectBox.appendChild(newOption)
  })

  //get and calculate value of bill
  calculate.addEventListener('click', e => {
    e.preventDefault()
    const costPerPerson = costOfBill.value / numberOfPeople.value
    const tipAmount = costOfBill.value * selectBox.value
    // const totalAmountOwed = (costO)
    console.log((costOfBill.value * tipAmount));
    results.style.display = `block`
    tipTotal.textContent = tipAmount
    totalAmount.textContent = tipAmount
    eachPersonOwes.textContent = tipAmount
    console.log(tipTotal);
  })

  // function showLoader() {
  //   setTimeout(loader.style.display = 'block', 3000)
  // }





})()

































// //Things I learned: How to dynamically include options into an HTML form
// //Things I changed: I created two functions to handle input. One for errors. One for calculating the tip.
// //I broke out the feedback into three different feeds. Before, all three would show for just one error.
// //Added a validator to only calculate if feedback wasn't received.
// //Added a toFixed method to the output
// // Made input disappear after submitting
// //Bug. I had setInterval in my code instead of setTimeout. 

// (function(){

// //Set up a service array
// const services = [{
//   value: 1,
//   title: "great - 20%"
// },{
//   value: 2,
//   title: "good - 10%"
// },{
//   value: 3,
//   title: "bad - 2%"
// }]



//   const validateInput = function(billAmount, numUsers, selectedService){

//    let isFeedback = false;
//    const feedback = document.querySelector('.feedback');
//     feedback.innerHTML = '';

//      if  (billAmount === "" || billAmount <="0"){
//         feedback.classList.add('showItem', 'alert-danger');
//         feedback.innerHTML += `<p>Bill amount cannot be blank</p>`
//         isFeedback = true;
//     }

//     if (numUsers <= "0"){
//       feedback.classList.add('showItem', 'alert-danger');
//       feedback.innerHTML += `<p>Number of users must be greater than zero</p>`;
//        isFeedback = true;
//     } 

//    if (selectedService === "0"){
//      feedback.classList.add('showItem', 'alert-danger');
//      feedback.innerHTML += `<p>You must select a Service</p>`
//       isFeedback = true;
//    }

//     setTimeout(function(){
//       feedback.classList.remove('showItem', 'alert-danger');
//     }, 10000);

//     return isFeedback;

//   }; // end validateInput

//   const calculateTip = function(billAmount, numUsers, selectedService) {

//     let percentTip = '';
//     if (selectedService === "1"){
//       percentTip = 0.2;
//     } else if (selectedService === "2"){
//       percentTip = 0.1;
//     } else {
//       percentTip = 0.02;
//     }

//     const tipAmount = Number(billAmount)*percentTip;
//     const totalAmount = Number(billAmount) + Number(tipAmount);
//     const eachPerson = Number(totalAmount) / Number(numUsers);

//     return [tipAmount, totalAmount, eachPerson];


//   };

//  //FORM SETUP - ADD SERVICES
// services.forEach(function(service){
//   //create the option element
//   const option = document.createElement('option');
//   option.textContent = service.title;
//   option.value = service.value;
//   //select the select element from the DOM
//   const select = document.querySelector('#input-service');
//   select.appendChild(option);
// })

//  //FORM SETUP - ADD EVENT LISTENER AND FUNCTION CALLS
//   const inputForm = document.querySelector('form');
//   inputForm.addEventListener('submit', function(e){

//   e.preventDefault();

//   //grab elements from the DOM
//   const inputBill = document.querySelector('#input-bill');
//   const inputUsers = document.querySelector('#input-users');
//   const serviceValue = document.querySelector('#input-service');

//    //get values from DOM elements
//   let billAmount = inputBill.value;
//   let  numUsers = inputUsers.value;
//   let selectedService = serviceValue.value;

//   //get feedback if info is not validated  
//   const isFeedback = validateInput(billAmount, numUsers, selectedService);



//    //calculated tip if info was validated
//     if (!isFeedback){
//         const loader = document.querySelector('.loader');
//         const resultsDOM = document.querySelector('.results');
//         const tipResultsDOM = document.querySelector('#tip-amount');
//         const totalAmountDOM = document.querySelector('#total-amount');
//         const eachPersonDOM = document.querySelector('#person-amount');

//        //calculate results
//         const results = calculateTip(billAmount, numUsers, selectedService);
//        //show loader  
//        loader.classList.add('showItem');
//        // show results after 2 seconds
//        setTimeout(function(){
//         loader.classList.remove('showItem');
//         tipResultsDOM.textContent= `${results[0].toFixed(2)}`
//         totalAmountDOM.textContent= `${results[1].toFixed(2)}`
//         eachPersonDOM.textContent= `${results[2].toFixed(2)}`
//         resultsDOM.classList.add('showItem');
//       },2000)

//       //clear values from DOM elements after 5 seconds
//       setTimeout(function(){
//         inputBill.value = '';
//         inputUsers.value = '';
//         serviceValue.value = 0;
//         resultsDOM.classList.remove('showItem');
//       }, 10000)


//     } //end isFeedback statement

//   }); //end eventListener for form


// })();

