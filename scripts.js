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

    addExpense(newExpense.expense, newExpense.category_name, newExpense.amount);

    console.log(newExpense);
}

function addExpense(title, category, amount) {
    try { 
        const li = document.createElement('li');
        li.className = 'expense';

        li.innerHTML = `
            <img src="./img/${category.toLowerCase()}.svg" alt="Ícone de tipo da despesa" />

            <div class="expense-info">
                <strong>${title}</strong>
                <span>${category}</span>
            </div>

            <span class="expense-amount"><small>$</small>${amount.replace('$', '')}</span>

            <img src="./img/remove.svg" alt="remover" class="remove-icon" />
        `;

        expenseListContainer.appendChild(li);
    } catch (error) {
        alert("Não foi poossível atualizar a lista de despesas.")
        console.error("Erro ao adicionar despesa:", error);
    }
    
}