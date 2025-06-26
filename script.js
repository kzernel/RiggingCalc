function calculateForce() {
  const load = parseFloat(document.getElementById("load").value);
  const legs = parseInt(document.getElementById("legs").value);
  const angleDeg = parseFloat(document.getElementById("angle").value);
  const wll = parseFloat(document.getElementById("wll").value);

  const forceOutput = document.getElementById("forceOutput");
  const warningOutput = document.getElementById("warningOutput");

  if (!load || !legs || !angleDeg) {
    alert("Please fill in all fields with valid numbers.");
    return;
  }

  const angleRad = angleDeg * (Math.PI / 180);
  const force = load / (legs * Math.cos(angleRad));
  const forceRounded = force.toFixed(2);

  forceOutput.textContent = `Each leg sees approximately ${forceRounded} lbs of force.`;

  if (wll && force > wll) {
    warningOutput.textContent = `⚠️ WARNING: This exceeds the WLL of ${wll} lbs per leg!`;
    warningOutput.style.color = "red";
    warningOutput.style.fontWeight = "bold";
  } else {
    warningOutput.textContent = "";
  }
}
