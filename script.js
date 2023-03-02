function calculateBMI() {
    const height = document.getElementById("height").value;
    const heightUnit = document.getElementById("heightUnit").value;
    const weight = document.getElementById("weight").value;
    const weightUnit = document.getElementById("weightUnit").value;

    let heightInMeters, weightInKgs;

    // Convert height to meters
    switch (heightUnit) {
        case "cm":
            heightInMeters = height / 100;
            break;
        case "ft":
            heightInMeters = height * 0.3048;
            break;
        case "m":
            heightInMeters = height;
            break;
    }

    // Convert weight to kgs
    switch (weightUnit) {
        case "kg":
            weightInKgs = weight;
            break;
        case "lb":
            weightInKgs = weight * 0.453592;
            break;
    }

    // Calculate BMI
    const bmi = weightInKgs / (heightInMeters * heightInMeters);

    // Display result
    let result = "";
    if (bmi < 18.5) {
        result = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        result = "Overweight";
    } else {
        result = "Obese";
    }

    document.getElementById("result").innerHTML = `Your BMI is ${bmi.toFixed(2)} (${result})`;
}
