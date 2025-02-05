document.getElementById('btn-add-money').addEventListener('click', function(event){
   event.preventDefault();

   const addMoney = document.getElementById('input-add-money').value;
   console.log(addMoney);

   const addPin = document.getElementById('input-pin').value;
   console.log(addPin);
})