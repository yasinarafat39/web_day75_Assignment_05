const buttons = document.querySelectorAll(".DonateNowBtn");
const inputFields = document.querySelectorAll(".card input");
const mainBalanceField = document.getElementById('mainBalance');
const historySection = document.getElementById('history');


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
    const mainBalance = parseFloat(mainBalanceField.innerText);
    const newMainBalance = mainBalance - tryToDonateAmount;
    mainBalanceField.innerText = newMainBalance; 
    
    // add this transaction into the history
    const cardTitle = singleButton.parentNode.parentNode.children[1]; 

    const arrayCardTitle = cardTitle.innerText.split(' '); 
    historySection.innerHTML += `
        <div class="border-2 p-6 space-y-4">
          <h1 class="text-2xl">${tryToDonateAmount} taka is Donated for Donate for Flood at ${arrayCardTitle[arrayCardTitle.length - 2]} ${arrayCardTitle[arrayCardTitle.length - 1]}</h1>
          <p class="text-xl text-gray-600">Date: ${new Date()}</p>
        </div>
    `
})
}