document
  .getElementById("btn-cashOut-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOutMoneyAmount = document.getElementById('input-cashOut-money').value;
    const cashOutPin = document.getElementById('input-cashOut-pin').value;
    console.log(cashOutMoneyAmount,cashOutPin);

    if(cashOutPin === '1234'){
        
        const mainBalance = document.getElementById('balance-money').innerText;
        // console.log(mainBalance)
        const mainBalanceNumber = parseFloat(mainBalance);
        const cashOutMoneyAmountNumber = parseFloat(cashOutMoneyAmount);
        
        const newBalance = mainBalanceNumber - cashOutMoneyAmountNumber;

        document.getElementById('balance-money').innerText = newBalance;
    }
    else{
        alert('Failed! Please try again later.');
    }
  });
