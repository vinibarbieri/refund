const amount = document.getElementById('amount');

amount.oninput = () => {
    let value = amount.value.replace(/\D/g, '');

    amount.value = formatCurrencyUSD(value);
}

function formatCurrencyUSD(value) {
    const valueInCents = value / 100
    const valueFormated = valueInCents.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    return valueFormated;
}