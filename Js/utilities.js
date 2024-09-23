
// create local date formate
function getCurrentDateAndTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  // Determine AM or PM
  const amOrPm = hours <= 12 ? "AM" : "PM";
  // convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;
  // format the date and time that I want
  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes} ${amOrPm}`;
  return formattedDate;
}


// Donate Toggle
function donateToggleActivities(){
    donationSection.classList.remove('hidden');  
    historyToggleBtn.classList.remove('bg-primary');
    donateToggleBtn.classList.add('bg-primary')
    historyToggleBtn.classList.add('bg-transparent')
    donateToggleBtn.classList.remove('bg-transparent')
    historySection.classList.add('hidden')
}


// History Toggle 
function historyToggleActivities(){
    donationSection.classList.add('hidden');
    historyToggleBtn.classList.remove('bg-transparent')
    historyToggleBtn.classList.remove('hover:bg-transparent')
    historyToggleBtn.classList.add('bg-primary') 
    historyToggleBtn.classList.add('hover:bg-primary') 
    donateToggleBtn.classList.remove('bg-primary')
    donateToggleBtn.classList.add('bg-transparent')
    historySection.classList.remove('hidden')
}


