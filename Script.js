// script.js
document.getElementById("tax-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get the income value from the input field
    const income = parseFloat(document.getElementById("income").value);
    
    // Initialize tax variable
    let taxAmount = 0;

    // Tax brackets (Example: simple progressive tax rates)
    if (income <= 10000) {
        taxAmount = 0;
    } else if (income <= 50000) {
        taxAmount = (income - 10000) * 0.1; // 10% tax on income above 10,000
    } else if (income <= 100000) {
        taxAmount = (income - 50000) * 0.2 + 4000; // 20% tax on income above 50,000, plus 4,000 from previous bracket
    } else {
        taxAmount = (income - 100000) * 0.3 + 14000; // 30% tax on income above 100,000, plus 14,000 from previous brackets
    }

    // Display the income and tax results
    document.getElementById("income-amount").textContent = income.toFixed(2);
    document.getElementById("tax-amount").textContent = taxAmount.toFixed(2);

    // Show the result
    document.getElementById("result").style.display = "block";
});