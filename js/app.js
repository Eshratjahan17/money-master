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

    let totalCost = foodNmuber + rentNmuber + clothNmuber;
    console.log(totalCost);
    const expenseField = document.getElementById('total-expenses');
    expenseField.innerText = totalCost;

    let balance = incomeNmuber - totalCost;

    const balanceField = document.getElementById('balance');
    balanceField.innerText = balance;







})