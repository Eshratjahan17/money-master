function getingId(fieldName) {
    const field = document.getElementById(fieldName).value;
    let fieldNumber = parseFloat(field);
    return fieldNumber;
}




document.getElementById('calculate').addEventListener('click', function() {
    let incomeNmuber = getingId('income-field');
    console.log(incomeNmuber);


    let foodNmuber = getingId('food-field');
    console.log(foodNmuber);

    let rentNmuber = getingId('rent-field');

    console.log(rentNmuber);


    let clothNmuber = getingId('cloth-field');
    console.log(clothNmuber);
    //error handling
    if (incomeNmuber < 0 || foodNmuber < 0 || rentNmuber < 0 || clothNmuber < 0) {
        window.alert('Please enter a positive number');
    } else if (isNaN(incomeNmuber) || isNaN(foodNmuber) || isNaN(rentNmuber) || isNaN(clothNmuber)) {
        window.alert('Please enter a number');
    } else {
        //total count
        let totalCost = foodNmuber + rentNmuber + clothNmuber;


        const expenseField = document.getElementById('total-expenses');
        expenseField.innerText = totalCost;
        //balance count
        let balance = incomeNmuber - totalCost;

        const balanceField = document.getElementById('balance');
        balanceField.innerText = balance;

    }




});


document.getElementById('save').addEventListener('click', function() {
    let saveAmountNumber = getingId('save-field');
    let incomeNmuber = getingId('income-field');
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