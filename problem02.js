const maxProfit = (prices) => {
    let buy1 = Infinity, buy2 = Infinity;
    let profit1 = 0, profit2 = 0;

    for (let i = 0; i < prices.length; i++) {
        buy1 = Math.min(buy1, prices[i]);
        profit1 = Math.max(profit1, prices[i] - buy1);
        buy2 = Math.min(buy2, prices[i] - profit1);
        profit2 = Math.max(profit2, prices[i] - buy2);
    }

    return profit2;
}

module.exports = maxProfit;
