
// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function() {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText =depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal =previousDepositAmount + depositAmount;

    depositTotal.innerText = newDepositTotal;
     
    
    // clear the deposit input field
    depositInput.value ='';

    // update account balance
    const balanceTotal =document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const newBalanceTotal = balanceTotalAmount + depositAmount;
    balanceTotal.innerText = newBalanceTotal;

});

document.getElementById('withdraw-button').addEventListener('click',function (){
    const withdarwInput = document.getElementById('withdraw-input');
    const withdrawamountText = withdarwInput.value;
    const newWithdrAmount = parseFloat(withdrawamountText);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    withdarwInput.value ='';
    

    // update balance

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalance - newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;

    


    
    
})