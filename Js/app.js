const buttons = document.querySelectorAll(".DonateNowBtn");
const inputFields = document.querySelectorAll(".card input");
const mainBalanceField = document.getElementById('mainBalance');
const historySection = document.getElementById('history');
const historyToggleBtn = document.getElementById('historyToggleBtn');
const donateToggleBtn = document.getElementById('donateToggleBtn');
const donationSection = document.getElementById('donationSection');


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
    const cardTitle = singleButton.parentNode.parentNode.children[1].innerText; 
    console.log(cardTitle)
     
    historySection.innerHTML += `
        <div class="border-2 p-6 space-y-4 rounded-xl">
          <h1 class="text-2xl">${tryToDonateAmount} taka is Donated for ${cardTitle}</h1>
          <p class="text-xl text-gray-600">Date: ${new Date()}</p>
        </div>
    `
})
}


historyToggleBtn.addEventListener('click', function(){ 
    donationSection.classList.add('hidden');
    historyToggleBtn.classList.remove('bg-transparent')
    historyToggleBtn.classList.remove('hover:bg-transparent')
    historyToggleBtn.classList.add('bg-primary') 
    historyToggleBtn.classList.add('hover:bg-primary') 
    donateToggleBtn.classList.remove('bg-primary')
    donateToggleBtn.classList.add('bg-transparent')
    historySection.classList.remove('hidden')
})

 
donateToggleBtn.addEventListener('click', function(){
    donationSection.classList.remove('hidden');  
    historyToggleBtn.classList.remove('bg-primary');
    donateToggleBtn.classList.add('bg-primary')
    historyToggleBtn.classList.add('bg-transparent')
    donateToggleBtn.classList.remove('bg-transparent')
    historySection.classList.add('hidden')
})