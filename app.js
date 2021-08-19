function updateProductNumber(product,price,increasing) {
    const productInput = document.getElementById(product+"-number");
    let productNumber = productInput.value;
    if (increasing == true) {
        productNumber = parseInt(productNumber)+1;
    } else if (productNumber > 0) {
      productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product+'-total');
    productTotal.innerText = productNumber * price;
}
function subTotal() {
    const phoneTotal = document.getElementById('phone-total');
    phoneTotalPrice = parseInt(phoneTotal.innerText);
    const caseTotal = document.getElementById('case-total');
    caseTotalPrice = parseInt(caseTotal.innerText);
    const subTotal = caseTotalPrice + phoneTotalPrice;
    let subTotalprice = document.getElementById('sub-total');
    subTotalprice.innerText = subTotal;
    //tax
    let taxAmount = document.getElementById("tax-amount");
    taxAmount.innerText = subTotal * .10;
    //totalprice
    let totalPrice = document.getElementById("total-price");
    totalPrice.innerText = subTotal + parseFloat(taxAmount.innerText);
}

//phone
document.getElementById("phone-plus").addEventListener("click", function () {
    updateProductNumber('phone', 1200, true);
    subTotal();
});
document.getElementById("phone-minus").addEventListener("click", function () {
    updateProductNumber("phone", 1200, false);
    subTotal();
});
//case
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber("case", 60, true);
    subTotal();
});
document.getElementById("case-minus").addEventListener("click", function () {
    updateProductNumber("case", 60, false);
    subTotal();
});

//Checkout Button Click Empty Field
document.getElementById("succes").addEventListener("click", function () {
    alert("Thank You for shopping with Us!!");
    const emptyTotal = document.getElementById("sub-total");
    emptyTotal.innerText = '0';
    const emptyTax = document.getElementById("tax-amount");
    emptyTax.innerText = "0";
    const emptyPrice = document.getElementById("total-price");
    emptyPrice.innerText = "0";
});