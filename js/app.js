// function getingId(fieldName) {
//     const field = document.getElementById(fieldName).value;
// }



document.getElementById('calculate').addEventListener('click', function() {
    let income = document.getElementById('income-field').value;
    let incomeNmuber = parseFloat(income);
    console.log(incomeNmuber);

    let food = document.getElementById('food-field').value;
    let foodNmuber = parseFloat(food);
    console.log(foodNmuber);
    let rent = document.getElementById('rent-field').value;
    let rentNmuber = parseFloat(rent);
    console.log(rentNmuber);
    let cloth = document.getElementById('cloth-field').value;
    let clothNmuber = parseFloat(cloth);
    console.log(clothNmuber);
    //total count
    let totalCost = foodNmuber + rentNmuber + clothNmuber;


    const expenseField = document.getElementById('total-expenses');
    expenseField.innerText = totalCost;
    //balance count
    let balance = incomeNmuber - totalCost;

    const balanceField = document.getElementById('balance');
    balanceField.innerText = balance;


});

function savings(fieldId) {
    let amountInput = document.getElementById(fieldId).value;
    let AmountNumber = parseFloat(amountInput);
    console.log(AmountNumber);
    return AmountNumber;


}
document.getElementById('save').addEventListener('click', function() {
    let saveAmountNumber = savings('save-field');
    let incomeNmuber = savings('income-field');
    let savedAmountField = document.getElementById('saving-amount');
    let balanceField = document.getElementById('balance');
    let balance = balanceField.innerText;
    const remainBalanceField = document.getElementById('remain-balance');


    let save = incomeNmuber * saveAmountNumber / 100;
    savedAmountField.innerText = save;

    let remainingBalance = balance - save;
    remainBalanceField.innerText = remainingBalance;




    console.log(remainingBalance);

})