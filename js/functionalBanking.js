function FindValueID(IdName) {
    const Ele = document.getElementById(IdName);
    const Val = parseFloat(Ele.value);
    return Val;
}

function FindTextID(IdName) {
    const Ele = document.getElementById(IdName);
    const Val = parseFloat(Ele.innerText);
    return Val;
}

function UpDateField(fieldName, Val) {
    const Field = document.getElementById(fieldName);
    const FieldText = FindTextID(fieldName);
    Field.innerText = Val + FieldText;
}

function UpDateBalance(val, Changetype) {
    debugger;
    const BalanceField = document.getElementById("total-balance");
    const BalanceVal = FindTextID('total-balance');
    if (Changetype == 'credit') {
        BalanceField.innerText = BalanceVal + val;
    }
    else if (Changetype == 'debit') {
        BalanceField.innerText = BalanceVal - val;
    }

}
// Deposit 

document.getElementById("deposit-submit-button").addEventListener("click", function () {
    const DepositTk = FindValueID('deposit-ammount-in-tk');
    if (DepositTk > 0) {
        UpDateField("deposit-total", DepositTk)
        UpDateBalance(DepositTk, 'credit')

    }
})


//withdraw
document.getElementById("withdraw-submit-button").addEventListener('click', function () {

    const withdrawTk = FindValueID('withdraw-ammount-in-tk');
    if (withdrawTk > 0) {
        UpDateField("total-withdraw", withdrawTk);
        UpDateBalance(withdrawTk, 'debit');
    }

})