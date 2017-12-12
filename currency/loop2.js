module.exports = (n) => {
  const sAmount = n.toFixed(2);
  const sArr = ['$'];

  for (let i = 0; i < sAmount.length; i++) {
    sArr.push(
      i < sAmount.length - 4 && sAmount[i] && i % 3 === 0 ? sAmount[i] + ',' : sAmount[i]
    );
  }

  return sArr.join('');
} 