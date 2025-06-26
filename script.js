function calculateForce() {
  const load = parseFloat(document.getElementById("load").value);
  const legs = parseInt(document.getElementById("legs").value);
  const angleDeg = parseFloat(document.getElementById("angle").value);
  const wll = parseFloat(document.getElementById("wll").value);
  const resultDiv = document.getElementById("result");

  if (!load || !legs || !angleDeg) {
    alert("Please fill in all fields with valid numbers.");
    return;
  }

  const angleRad = angleDeg * (Math.PI / 180);
  const force = load / (legs * Math.cos(angleRad));
  const forceRounded = force.toFixed(2);

  // Build base message
  let message = `Each leg sees approximately ${forceRounded} lbs of force.`;

  // Evaluate WLL
  if (wll && force > wll) {
    message += ` ⚠️ WARNING: This exceeds the WLL of ${wll} lbs per leg!`;
    resultDiv.style.color = "red";
    resultDiv.style.fontWeight = "bold";
  } else {
    resultDiv.style.color = "black";
    resultDiv.style.fontWeight = "normal";
  }

  resultDiv.textContent = message;
}
