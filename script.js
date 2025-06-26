function calculateForce() {
  const load = parseFloat(document.getElementById("load").value);
  const legs = parseInt(document.getElementById("legs").value);
  const angleDeg = parseFloat(document.getElementById("angle").value);

  if (!load || !legs || !angleDeg) {
    alert("Please fill in all fields with valid numbers.");
    return;
  }

  const angleRad = angleDeg * (Math.PI / 180);
  const force = load / (legs * Math.cos(angleRad));
  
  document.getElementById("result").textContent = 
    `Each leg sees approximately ${force.toFixed(2)} lbs of force.`;
}
