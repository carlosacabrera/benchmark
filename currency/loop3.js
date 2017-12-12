// Winner

module.exports = (n) => {
  const sAmount = n.toFixed(2);
  let sStr = '$';

  for (let i = 0; i < sAmount.length; i++) {
    sStr += i < sAmount.length - 4 && sAmount[i] && i % 3 === 0 ? sAmount[i] + ',' : sAmount[i]
  }

  return sStr;
} 