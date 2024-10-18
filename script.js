function calculateInterest() {
  const principal = parseFloat(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const time = parseFloat(document.getElementById('time').value);
  const interestType = document.getElementById('interestType').value;


  if (isNaN(principal) || principal <= 0) {
    alert("Please enter a valid principal amount.");
    return;
  }

  if (isNaN(rate) || rate <= 0) {
    alert("Please enter a valid interest rate.");
    return;
  }

  if (isNaN(time) || time <= 0) {
    alert("Please enter a valid time in years.");
    return;
  }

  let interest;
  if (interestType === 'simple') {
    interest = (principal * rate * time) / 100;
  } else {
    interest = principal * (Math.pow((1 + rate / 100), time)) - principal;
  }

  // document.getElementById('result').innerText = `The calculated interest is ₹${interest.toFixed(2)}`;
  const resultElement = document.getElementById('result');
  resultElement.innerText = `The calculated interest is ₹${interest.toFixed(2)}`;
  resultElement.style.display = 'block';
}
