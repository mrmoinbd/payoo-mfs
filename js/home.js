document.getElementById('btn-add-money').addEventListener('click', function(event){
   event.preventDefault();

   const addMoney = document.getElementById('input-add-money').value;
   console.log(addMoney);

   const addPin = document.getElementById('input-pin').value;
   console.log(addPin);

   if(addPin === '1234'){
    console.log('Add money to main balance');

    const mainBalance = document.getElementById('balance-money').innerText;
    // console.log(mainBalance)

  const mainBalanceNumber = parseFloat(mainBalance);
  const addMoneyNumber = parseFloat(addMoney);
  const newBalance = mainBalanceNumber + addMoneyNumber;
  console.log(newBalance);

  document.getElementById('balance-money').innerText = newBalance;
   }
   else{
    alert('Wrong number');
   }
});