    var stocksOwned = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
    var stockPrice = [134.72, 11.50, 168.93, 24.11, 738.20, 255.77]
    
    addStock = function(amount, stock)
    {
        stocksOwned[stock] = parseFloat(stocksOwned[stock]) + (parseFloat(stockPrice[stock])  * amount);
    }
    
    totalStock = function()
    {
        return parseFloat(stocksOwned.reduce((a, b) => a + b, 0));
    }
    
    sellStock = function(amount, stock)
    {
        stocksOwned[stock] = parseFloat(stocksOwned[stock]) - (parseFloat(stockPrice[stock]) * amount);
    }