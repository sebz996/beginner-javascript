function calculateBill(billAmount, taxRate) {
  const total = billAmount * (1 + taxRate);
  return total;
}

const myTotal = calculateBill(100, 0.13);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Joe') {
  return `HEY ${name.toUpperCase()}`;
}

doctorize('seb');
