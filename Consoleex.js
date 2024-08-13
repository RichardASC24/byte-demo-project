let currentOrderNumber;

// Elements
let clientLight = document.getElementById("OrderLight");
let orderNumberText = document.getElementById("Onum");
let partnerOrderTextNum = document.getElementById("Onum2"); 
let clientSubmitButton = document.getElementById("Clientbtn").querySelector("input");
let customerOrderDetails = document.getElementById("CustomerOrderDetails");
let partnerSubmitButton = document.getElementById("Partnerbtn").querySelector("input");
let clientOrderText = document.getElementById("OrderInside");

function RandomOrderNumber() {
    return Math.floor(100 + Math.random() * 900);
}

function handleClientSubmit(event) {
    event.preventDefault();
    currentOrderNumber = RandomOrderNumber();
    
    orderNumberText.innerHTML = currentOrderNumber;
    partnerOrderTextNum.innerHTML = currentOrderNumber;
    customerOrderDetails.innerHTML = clientOrderText.value; 
}

function handlePartnerSubmit() {
    clientLight.style.backgroundColor = "green";
   
}

clientSubmitButton.addEventListener("click", handleClientSubmit);
partnerSubmitButton.addEventListener("click", handlePartnerSubmit);
