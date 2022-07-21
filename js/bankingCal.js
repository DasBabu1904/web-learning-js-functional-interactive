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


document.getElementById("deposit-submit-button").addEventListener('click', function () {
    const depositele = document.getElementById('deposit-ammount-in-tk');
    const DepositTk = depositele.value;
    const BalanceEle = document.getElementById('total-balance');
    const BalanceText = BalanceEle.innerText;

    BalanceEle.innerText = parseFloat(DepositTk) + parseFloat(BalanceText);
})