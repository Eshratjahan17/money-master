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

function savings() {
    // let saveInput = document.getElementById('save-field').value;
    // let saveAmountNumber = parseFloat(saveInput);
    // console.log(saveAmountNumber);

    let saveInput = document.getElementById('save-field').value;
    let saveAmountNumber = parseFloat(saveInput);
    console.log(saveAmountNumber);
    let income = document.getElementById('income-field').value;
    let incomeNmuber = parseFloat(income);
    console.log(incomeNmuber);

    let save = incomeNmuber * saveAmountNumber / 100;
    console.log(save);

    return save;


}
document.getElementById('save').addEventListener('click', function() {
    savings();

})