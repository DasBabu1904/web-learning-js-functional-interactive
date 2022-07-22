// Deposit 

document.getElementById("deposit-submit-button").addEventListener("click", function () {
    const depositele = document.getElementById('deposit-ammount-in-tk');
    const DepositTk = depositele.value;
    const depositTotalEle = document.getElementById("deposit-total");
    const depositTotalText = depositTotalEle.innerText;

    depositTotalEle.innerText = parseFloat(DepositTk) + parseFloat(depositTotalText);

})

//Balance

document.getElementById("deposit-submit-button").addEventListener('click', function () {
    const depositele = document.getElementById('deposit-ammount-in-tk');
    const DepositTk = depositele.value;
    const BalanceEle = document.getElementById('total-balance');
    const BalanceText = BalanceEle.innerText;

    BalanceEle.innerText = parseFloat(DepositTk) + parseFloat(BalanceText);
})


//withdraw
document.getElementById("withdraw-submit-button").addEventListener('click', function () {
    const withdrawBtn = document.getElementById('withdraw-ammount-in-tk');
    const withdrawTk = withdrawBtn.value;
    const BalanceElem = document.getElementById('total-balance');
    const BalanceText2 = BalanceElem.innerText;
    const withDrawEle = document.getElementById("total-withdraw");
    const withdrawText = withDrawEle.innerText;
    console.log(parseFloat(BalanceText2) - parseFloat(withdrawTk))
    console.log(parseFloat(withdrawText) + parseFloat(withdrawTk))

    BalanceElem.innerText = parseFloat(BalanceText2) - parseFloat(withdrawTk);
    withDrawEle.innerText = parseFloat(withdrawText) + parseFloat(withdrawTk);
})