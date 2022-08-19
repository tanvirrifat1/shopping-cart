
function getTextElementValueById(elementId){
    
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById( elementId, value){
    const subTotalElement = document.getElementById( elementId);
    subTotalElement.innerText = value;

}



function calculateSubTotal(){

       // calculate number
   const currentPhoneTotal = getTextElementValueById('phone-total')
   const currentCaseTotal = getTextElementValueById('case-total')
 

   const currentSubTotal = currentCaseTotal + currentPhoneTotal;
   setTextElementValueById('sub-total', currentSubTotal);

    //calculate tex
    const textAmountString =( currentSubTotal * 0.1).toFixed(2);
    const textAmount = parseFloat(textAmountString);
    setTextElementValueById('text-amount', textAmount);

    const finalAmount = currentSubTotal + textAmount;
    setTextElementValueById('final-total', finalAmount);
}
