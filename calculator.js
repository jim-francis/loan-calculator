window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defaultValues = {
    amount: 8500,
    years: 3,
    rate: 15
  }
  let amountValue = document.getElementById("loan-amount");
  let yearsValue = document.getElementById("loan-years");
  let rateValue = document.getElementById("loan-rate");
  amountValue.value = defaultValues.amount;
  yearsValue.value = defaultValues.years;
  rateValue.value = defaultValues.rate;
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const newUIvalues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(newUIvalues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let i = (values.rate / 100) / 12;
  let n = values.years * 12;
  return ((i * values.amount) / (1 - Math.pow((1 + i), -n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = `$${monthly}`;
}

