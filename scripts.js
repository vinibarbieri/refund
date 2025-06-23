const form = document.querySelector('form');
const amount = document.getElementById('amount');
const expense = document.getElementById('expense');
const category = document.getElementById('category');

amount.oninput = () => {
    let value = amount.value.replace(/\D/g, '');

    amount.value = formatCurrencyUSD(value);
}

function formatCurrencyUSD(value) {
    const valueInCents = value / 100
    const valueInUSD = valueInCents.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    return valueInUSD;
}

form.onsubmit = (event) => {
    event.preventDefault();

    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }

    console.log(newExpense);
}