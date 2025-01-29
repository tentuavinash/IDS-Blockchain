function transfer() {
    const fromAccount = document.getElementById('fromAccount').value;
    const toAccount = document.getElementById('toAccount').value;
    const amount = document.getElementById('amount').value;
    const status = document.getElementById('status');

    if (!fromAccount || !toAccount || !amount) {
        status.textContent = 'Please fill in all fields.';
        status.style.color = 'red';
        return;
    }

    // Simulate transfer operation
    status.textContent = `Transferred ${amount} tokens from ${fromAccount} to ${toAccount}.`;
    status.style.color = 'green';
}
