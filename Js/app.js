const buttons = document.querySelectorAll(".DonateNowBtn");
const inputFields = document.querySelectorAll(".card input");


for (let singleinput of inputFields) {
//   console.log(singleinput);
}

for (let singleButton of buttons) {
//   console.log(singleButton);
singleButton.addEventListener('click', function(){
    // console.log('Donate now button clicked')
    // console.log(singleButton.parentNode.parentNode.children[0].children[1].innerText); // donatedAmount
    // console.log(singleButton.parentNode.parentNode.children[3].value) // Amount

    const donatedAmountField = singleButton.parentNode.parentNode.children[0].children[1];
    const donatedAmount = parseFloat(donatedAmountField.innerText);
    const tryToDonateAmountField = singleButton.parentNode.parentNode.children[3];
    const tryToDonateAmount = parseFloat(tryToDonateAmountField.value);
    
    // increase donated Amount and set
    const newDonatedAmount = donatedAmount + tryToDonateAmount;
    donatedAmountField.innerText = newDonatedAmount;
    tryToDonateAmountField.value = '';
    
    // substruct from main balance
    const mainBalanceField = document.getElementById('mainBalance');
    const mainBalance = parseFloat(mainBalanceField.innerText);
    const newMainBalance = mainBalance - tryToDonateAmount;
    mainBalanceField.innerText = newMainBalance;
    console.log(mainBalance)
    
})
}