function calculateBMI() {
  let h = document.getElementById("height").value;
  let w = document.getElementById("weight").value;
  let bmi = w / ((h/100) * (h/100));

  let box = document.getElementById("bmiResult");
  box.className = "result";

  if (bmi < 18.5) {
    box.classList.add("warning");
    box.innerText = `BMI: ${bmi.toFixed(2)} – Underweight\nRisk: Anemia`;
  } else if (bmi <= 24.9) {
    box.classList.add("success");
    box.innerText = `BMI: ${bmi.toFixed(2)} – Normal`;
  } else if (bmi <= 29.9) {
    box.classList.add("warning");
    box.innerText = `BMI: ${bmi.toFixed(2)} – Overweight`;
  } else {
    box.classList.add("danger");
    box.innerText = `BMI: ${bmi.toFixed(2)} – Obese\nRisk: Diabetes`;
  }
}