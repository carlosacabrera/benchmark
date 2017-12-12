module.exports = (n) => {
  const sAmount = n.toFixed(2).split('');
  const cCount = Math.floor(sAmount.length / 3);

  for (let i = cCount + 1; i >= 3; i--) {
    sAmount.splice(cCount - i * 3, 0, ',');
  }

  return '$' + sAmount.join('');
} 