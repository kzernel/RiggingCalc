function calculateForce() {
  const load = parseFloat(document.getElementById("load").value);
  const legs = parseInt(document.getElementById("legs").value);
  const angleDeg = parseFloat(document.getElementById("angle").value);
  const wll = parseFloat(document.getElementById("wll").value);

  if (!load || !legs || !angleDeg) {
    alert("Please fill in all fields with valid numbers.");
    return;
  }

  const angleRad = angleDeg * (Math.PI / 180);
  const force = load / (legs * Math.cos(angleRad));
  const forceRounded = force.toFixed(2);

  let result = `Each leg sees approximately ${forceRounded} lbs of force.`;

  if (wll && force > wll) {
    result += ` ⚠️ Warning: This exceeds the WLL of ${wll} lbs per leg!`;
    document.getElementById("result").style.color = "red";
  } else {
    document.getElementById("result").style.color = "black";
  }

  document.getElementById("result").textContent = result;
}
