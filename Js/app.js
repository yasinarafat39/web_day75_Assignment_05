const buttons = document.querySelectorAll(".DonateNowBtn");
const inputFields = document.querySelectorAll(".card input");
const mainBalanceField = document.getElementById('mainBalance');
const historySection = document.getElementById('history');
const historyToggleBtn = document.getElementById('historyToggleBtn');
const donateToggleBtn = document.getElementById('donateToggleBtn');
const donationSection = document.getElementById('donationSection');


for (let singleButton of buttons) { 
singleButton.addEventListener('click', function(){ 
 

    const donatedAmountField = singleButton.parentNode.parentNode.children[0].children[1];
    const donatedAmount = parseFloat(donatedAmountField.innerText);
    const tryToDonateAmountField = singleButton.parentNode.parentNode.children[3];
    const tryToDonateAmount = parseFloat(tryToDonateAmountField.value);
    const mainBalance = parseFloat(mainBalanceField.innerText);

    if(!tryToDonateAmount || typeof tryToDonateAmount !== 'number' || tryToDonateAmount > mainBalance || tryToDonateAmount < 1){
        return alert('Invalid Donation amount.')
    } else{
        // increase donated Amount and set
        const newDonatedAmount = donatedAmount + tryToDonateAmount;
        donatedAmountField.innerText = newDonatedAmount;
        tryToDonateAmountField.value = '';

        // substruct from main balance  
        const newMainBalance = mainBalance - tryToDonateAmount;
        mainBalanceField.innerText = newMainBalance; 

        // add this transaction into the history
        const cardTitle = singleButton.parentNode.parentNode.children[1].innerText; 

        historySection.innerHTML += `
            <div class="border-2 p-6 mx-6 lg:mx-0 space-y-4 rounded-xl">
              <h1 class="text-2xl">${tryToDonateAmount} taka is Donated for ${cardTitle}</h1>
              <p class="text-xl text-gray-600">Date: ${getCurrentDateAndTime()}</p>
            </div>
        `
        // Success Modal
        // <!-- Open the modal using ID.showModal() method -->
        my_modal_1.showModal()
    }
    
})
}


historyToggleBtn.addEventListener('click', function(){ 
    historyToggleActivities();
})

 
donateToggleBtn.addEventListener('click', function(){
    donateToggleActivities();
})