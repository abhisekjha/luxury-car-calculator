document.addEventListener('DOMContentLoaded', function() {
    carTypeSelect = document.getElementById('carType');

    const prices = {
        "Bugatti Chiron": 3000000,
        "Lamborghini Aventador": 500000,
        "Ferrari SF90 Stradale": 625000,
        "McLaren Speedtail": 2200000,
        "Aston Martin Valkyrie": 3200000,
        "Pagani Huayra": 2800000,
        "Koenigsegg Jesko": 3000000,
        "Rolls-Royce Phantom": 450000,
        "Bentley Mulsanne": 310000,
        "Porsche 918 Spyder": 850000,
        "Mercedes-Benz SLS AMG": 250000,
        "Tesla Roadster": 200000,
        "Lexus LFA": 375000,
        "Audi R8": 170000,
        "BMW i8": 147500,
        "Jaguar F-Type": 85000,
        "Maserati MC20": 210000,
        "Ford GT": 500000,
        "Chevrolet Corvette Z06": 85000,
        "Nissan GT-R Nismo": 210000,
        "Acura NSX": 157500,
        "Lamborghini Huracán": 250000,
        "Ferrari 488 Pista": 350000,
        "Aston Martin DB11": 200000,
        "Bentley Continental GT": 225000
    };

    const annualCosts = {
        "Bugatti Chiron": 87000,
        "Lamborghini Aventador": 24000,
        "Ferrari SF90 Stradale": 30000,
        "McLaren Speedtail": 65000,
        "Aston Martin Valkyrie": 80000,
        "Pagani Huayra": 72000,
        "Koenigsegg Jesko": 75000,
        "Rolls-Royce Phantom": 20000,
        "Bentley Mulsanne": 18000,
        "Porsche 918 Spyder": 25000,
        "Mercedes-Benz SLS AMG": 15000,
        "Tesla Roadster": 6000,
        "Lexus LFA": 12000,
        "Audi R8": 8000,
        "BMW i8": 5000,
        "Jaguar F-Type": 7000,
        "Maserati MC20": 10000,
        "Ford GT": 22000,
        "Chevrolet Corvette Z06": 7000,
        "Nissan GT-R Nismo": 9000,
        "Acura NSX": 10000,
        "Lamborghini Huracán": 15000,
        "Ferrari 488 Pista": 22000,
        "Aston Martin DB11": 12000,
        "Bentley Continental GT": 15000
    };

    // Populate car types in select dropdown
    carTypeSelect.innerHTML = '';

    for (const car in prices) {
        if (prices.hasOwnProperty(car)) {
            const option = document.createElement('option');
            option.value = car;
            option.innerText = car;
            carTypeSelect.appendChild(option);
        }
    }

});
    function calculate() {
        const carType = document.getElementById('carType').value;
        const years = parseInt(document.getElementById('years').value);
        const income = parseInt(document.getElementById('income').value);
    
        const prices = {
            "Bugatti Chiron": 3000000,
            "Lamborghini Aventador": 500000,
            "Ferrari SF90 Stradale": 625000,
            "McLaren Speedtail": 2200000,
            "Aston Martin Valkyrie": 3200000,
            "Pagani Huayra": 2800000,
            "Koenigsegg Jesko": 3000000,
            "Rolls-Royce Phantom": 450000,
            "Bentley Mulsanne": 310000,
            "Porsche 918 Spyder": 850000,
            "Mercedes-Benz SLS AMG": 250000,
            "Tesla Roadster": 200000,
            "Lexus LFA": 375000,
            "Audi R8": 170000,
            "BMW i8": 147500,
            "Jaguar F-Type": 85000,
            "Maserati MC20": 210000,
            "Ford GT": 500000,
            "Chevrolet Corvette Z06": 85000,
            "Nissan GT-R Nismo": 210000,
            "Acura NSX": 157500,
            "Lamborghini Huracán": 250000,
            "Ferrari 488 Pista": 350000,
            "Aston Martin DB11": 200000,
            "Bentley Continental GT": 225000
        };
    
        const annualCosts = {
            "Bugatti Chiron": 87000,
            "Lamborghini Aventador": 24000,
            "Ferrari SF90 Stradale": 30000,
            "McLaren Speedtail": 65000,
            "Aston Martin Valkyrie": 80000,
            "Pagani Huayra": 72000,
            "Koenigsegg Jesko": 75000,
            "Rolls-Royce Phantom": 20000,
            "Bentley Mulsanne": 18000,
            "Porsche 918 Spyder": 25000,
            "Mercedes-Benz SLS AMG": 15000,
            "Tesla Roadster": 6000,
            "Lexus LFA": 12000,
            "Audi R8": 8000,
            "BMW i8": 5000,
            "Jaguar F-Type": 7000,
            "Maserati MC20": 10000,
            "Ford GT": 22000,
            "Chevrolet Corvette Z06": 7000,
            "Nissan GT-R Nismo": 9000,
            "Acura NSX": 10000,
            "Lamborghini Huracán": 15000,
            "Ferrari 488 Pista": 22000,
            "Aston Martin DB11": 12000,
            "Bentley Continental GT": 15000
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
            result += `<p><em>After checking your aukaad, it seems even a bicycle might be a stretch! 🚴‍♂️😂</em></p>`;
        }
    
    
        document.getElementById('result').innerHTML = result;
    }

