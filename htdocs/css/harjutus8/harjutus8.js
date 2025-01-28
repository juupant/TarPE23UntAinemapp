// Mündid
let money =[200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];
function getCoins(){
   const coin = [];
   const MAX_Coin_Value = 2;
   let current = 0;
while (current < money.length) {
    const currentValue = money[current];
    if(currentValue > MAX_Coin_Value){
            current++;
        continue;
    }
    let isAdded = false;
    for (let i = 0; i < coin.length; i++) {
    const coinValue = coin[i];
    if(coinValue.includes(currentValue)){
        coinValue.Push(currentValue);
        isAdded = true;
        break;
    }
   }
   if(isAdded){
    coin.push(Array.of(currentValue));
   }
   current++;
}
   for (const coinValue of coin) {
    document.write(`${coinValue[0]} kokku: ${coinValue.reduce((sum,a)=> sum+ parseFloat(a),0)}<br>`);
    document.write(`KOKKU:${getSum(coin)}`);
   }
}
function getSum(arrayOfNumbers){
    let result = 0;
    for (const subArray of arrayOfNumbers) {
        result += subArray.reduce((sum,num)=> sum+num,0)
    }
    return result;
}