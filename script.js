function splitExpense() {
    const totalAmount = parseFloat(document.getElementById("totalAmount").value);
    const peopleCount = parseInt(document.getElementById("peopleCount").value);
    const payerName = document.getElementById("payerName").value.trim();
    const expenseNote = document.getElementById("expenseNote").value.trim();

    const resultDiv = document.getElementById("result");
    const historyList = document.getElementById("historyList");

    if (isNaN(totalAmount) || isNaN(peopleCount) || peopleCount <= 0 || totalAmount <= 0) {
        resultDiv.innerText = "⚠️ Please enter valid total amount and number of people.";
        return;
    }

    const perPerson = (totalAmount / peopleCount).toFixed(2);
    const payerDisplay = payerName ? `Paid by ${payerName}` : "Split equally";
    const noteDisplay = expenseNote ? `(${expenseNote})` : "";

    resultDiv.innerText = `Each person should pay ₹${perPerson}. ${payerDisplay} ${noteDisplay}`;

    const historyEntry = document.createElement("li");
    historyEntry.innerText = `₹${totalAmount} split among ${peopleCount} → ₹${perPerson} each. ${payerDisplay} ${noteDisplay}`;
    historyList.prepend(historyEntry);

    // Reset fields for new input
    document.getElementById("totalAmount").value = "";
    document.getElementById("peopleCount").value = "";
    document.getElementById("payerName").value = "";
    document.getElementById("expenseNote").value = "";
}
