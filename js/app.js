function getingId(fieldName) {
    const field = document.getElementById(fieldName).value;
    let fieldNumber = parseFloat(field);
    return fieldNumber;
}




document.getElementById('calculate').addEventListener('click', function() {
    let incomeNmuber = getingId('income-field');
    let foodNmuber = getingId('food-field');
    let rentNmuber = getingId('rent-field');
    let clothNmuber = getingId('cloth-field');


    const savingError = document.getElementById('saving-error');
    const incomeError = document.getElementById('income-error');




    //error handling
    if (incomeNmuber < 0 || foodNmuber < 0 || rentNmuber < 0 || clothNmuber < 0) {
        window.alert('Please enter a positive number');
    } else if (isNaN(incomeNmuber) || isNaN(foodNmuber) || isNaN(rentNmuber) || isNaN(clothNmuber)) {
        window.alert('Please enter a number');
    } else {
        //total count

        let totalCost = foodNmuber + rentNmuber + clothNmuber;
        if (totalCost > incomeNmuber) {
            savingError.style.display = 'none';
            incomeError.style.display = 'block';


        } else {
            const expenseField = document.getElementById('total-expenses');
            expenseField.innerText = totalCost;
            //balance count
            let balance = incomeNmuber - totalCost;

            const balanceField = document.getElementById('balance');
            balanceField.innerText = balance;



        }

    }

});


document.getElementById('save').addEventListener('click', function() {
    let saveAmountNumber = getingId('save-field');
    let incomeNmuber = getingId('income-field');
    let savedAmountField = document.getElementById('saving-amount');
    let balanceField = document.getElementById('balance');
    let balance = balanceField.innerText;
    const remainBalanceField = document.getElementById('remain-balance');
    const savingError = document.getElementById('saving-error');
    const incomeError = document.getElementById('income-error');
    //error handling
    if (saveAmountNumber < 0) {
        window.alert('Please enter a positive number');

    } else if (isNaN(saveAmountNumber)) {
        window.alert('Please enter a number');

    } else {
        let save = incomeNmuber * saveAmountNumber / 100;
        if (save > balance) {
            savingError.style.display = 'block';
            incomeError.style.display = 'none';


        } else {
            savedAmountField.innerText = save;

            let remainingBalance = balance - save;
            remainBalanceField.innerText = remainingBalance;

        }



    }


});