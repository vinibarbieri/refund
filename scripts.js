const form = document.querySelector('form');
const amount = document.getElementById('amount');
const expense = document.getElementById('expense');
const category = document.getElementById('category');
const expenseList = document.getElementsByClassName('expense');
const expenseListContainer = document.querySelector('ul');

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

    console.log(newExpense.amount);

    addExpense(newExpense.expense, newExpense.category_name, newExpense.category_id, newExpense.amount);

    console.log(newExpense);
}

function addExpense(title, category_name, category_id, amount) {
    try { 
        const expenseItem = document.createElement('li');
        expenseItem.classList.add('expense');

        const expenseIcon = document.createElement('img');
        expenseIcon.setAttribute("src", `./img/${category_id}.svg`);
        expenseIcon.setAttribute("alt", `${category_name} icon`);

        const expenseInfo = document.createElement('div');
        expenseInfo.classList.add('expense-info');

        const expenseTitle = document.createElement('strong');
        expenseTitle.textContent = title;

        const expenseCategory = document.createElement('span');
        expenseCategory.textContent = category_name;

        expenseInfo.append(expenseTitle, expenseCategory);

        const expenseAmount = document.createElement('span');
        expenseAmount.classList.add('expense-amount');

        const currencySign = document.createElement('small');
        currencySign.textContent = '$';

        const amountValue = document.createTextNode(amount.replace('$', ''));

        expenseAmount.append(currencySign, amountValue);

        const removeIcon = document.createElement('img');
        removeIcon.setAttribute("src", "./img/remove.svg");
        removeIcon.setAttribute("alt", "remove");
        removeIcon.classList.add('remove-icon');

        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);

        expenseListContainer.appendChild(expenseItem);
    } catch (error) {
        alert("Não foi poossível atualizar a lista de despesas.")
        console.error("Erro ao adicionar despesa:", error);
    }
    
}