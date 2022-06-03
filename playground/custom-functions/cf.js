function calculateBill() {
  const amount = 100 * 1.13;
  const total = Math.round(amount);
  return total;
}

const myTotal = calculateBill();

console.log(`Your total is ${calculateBill()}.`);
