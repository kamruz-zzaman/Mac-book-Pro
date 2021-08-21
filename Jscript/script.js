//getting button value 
const total = document.getElementById('totalAmount');
let convertToNum = parseFloat(total.innerText);
function getButtonValue(input, text) {
    const getInput = document.getElementById(input);
    const getText = document.getElementById(text);
    getText.innerText = getInput.value;
}
//getting text field
function getTextfield(text) {
    const textVelue = document.getElementById(text).innerText;
    let convertTextValue = parseInt(textVelue);
    return convertTextValue;
}
//total calculation
function calculateTotal() {
    const finalTotal = document.getElementById('finalTotal');
    const exMemoryCost = getTextfield('exMemoryCost');
    const exStorageCost = getTextfield('exStorageCost');
    const deliveryCharge = getTextfield('deliveryCharge');
    const totals = exMemoryCost + exStorageCost + deliveryCharge;
    total.innerText = convertToNum + totals;
    finalTotal.innerText = total.innerText;
    return finalTotal.innerText;
}
//promo coad generate
function promoInput() {
    const promoBtn = document.getElementById('promoBtn');
    const getPromoInput = document.getElementById('promoInput');
    const promoInputValue = getPromoInput.value;
    const convertFinalTotal = parseFloat(calculateTotal());
    if (promoInputValue.toLowerCase() == 'stevekaku') {
        const promoDiscount = convertFinalTotal * (20 / 100);
        const promoTotal = convertFinalTotal - promoDiscount;
        finalTotal.innerText = promoTotal;
        getPromoInput.value = '';
        promoBtn.setAttribute('disabled', true)
    }
    else {
        alert('You Enter a Wrong PROMO Coad');
    }

}
// add button Listener
document.getElementById('memory8Gb').addEventListener('click', function () {
    getButtonValue('memory8Gb', 'exMemoryCost');
    calculateTotal();
})
document.getElementById('memory16Gb').addEventListener('click', function () {
    getButtonValue('memory16Gb', 'exMemoryCost');
    calculateTotal();
})
document.getElementById('ssd256GB').addEventListener('click', function () {
    getButtonValue('ssd256GB', 'exStorageCost');
    calculateTotal();
})
document.getElementById('ssd512Gb').addEventListener('click', function () {
    getButtonValue('ssd512Gb', 'exStorageCost');
    calculateTotal();
})
document.getElementById('ssd1Tb').addEventListener('click', function () {
    getButtonValue('ssd1Tb', 'exStorageCost');
    calculateTotal();
})
document.getElementById('freeDelivery').addEventListener('click', function () {
    getButtonValue('freeDelivery', 'deliveryCharge');
    calculateTotal();
})
document.getElementById('chargeForDelivery').addEventListener('click', function () {
    getButtonValue('chargeForDelivery', 'deliveryCharge');
    calculateTotal();
})
document.getElementById('promoBtn').addEventListener('click', function () {
    promoInput();
})


