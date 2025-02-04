document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    console.log('clicked the login button')

    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);

    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);

    if(phoneNumber === '5' && pinNumber === '1234'
    ){
        console.log('you are login this path')
        window.location.href= ("./home.html");
    }
    else{
        alert('Your phone number or password is wrong')
    }


})