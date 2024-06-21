// script.js
function calculate() {
    const carType = document.getElementById('carType').value;
    const years = parseInt(document.getElementById('years').value);
    const income = parseInt(document.getElementById('income').value);

    const prices = {
        "Bugatti Chiron": 3000000,
        "Lamborghini Aventador": 500000
    };
    const annualCosts = {
        "Bugatti Chiron": 87000,
        "Lamborghini Aventador": 24000
    };
    const totalCost = prices[carType] + annualCosts[carType] * years;
    const monthlySavings = totalCost / (years * 12);
    const requiredAnnualIncome = monthlySavings * 12 / 0.2;

    result = `
        <p>To own a <strong>${carType}</strong> in ${years} years, you need to save:</p>
        <p><strong>$${monthlySavings.toFixed(2)}</strong> per month</p>
        <p>Assuming you save 20% of your income, your required annual income is:</p>
        <p><strong>$${requiredAnnualIncome.toFixed(2)}</strong> per year</p>
    `;
    
    // Checking if income is sufficient for car purchase
    if (income >= requiredAnnualIncome) {
        result += `<p><strong>Congratulations!</strong> You are on track to meet your goal with your current income and savings rate.</p>`;
        // Adding a humorous comment about affording a luxury car
        result += `<p><em>Looks like you're ready to drive that $${carType} 🚗💸</em></p>`;
    } else {
        result += `<p><strong>Warning!</strong> You need to either save more or increase your income to meet your goal.</p>`;
        // Adding a humorous comment about the reality check
        result += `<p><em>After checking that, it seems even a bicycle might be a stretch! 🚴‍♂️😂</em></p>`;
    }


    document.getElementById('result').innerHTML = result;
}
