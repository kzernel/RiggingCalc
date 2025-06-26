const riggingOptions = {
  "monopole": [
    "A - Top Block Only w/ Straight Tag",
    "B - Top & Heel Blocks w/ Straight Tag",
    "C - Top Block Only w/ Trolley System",
    "D - Top & Heel Blocks w/ Trolley Tag"
  ],
  "self-support": [
    "A - Bridle w/ Top Block",
    "B - Bridle + Heel Block",
    "C - Bridle + Trolley Block"
  ],
  "guyed": [
    "A - Guyed Block (Static)",
    "B - Guyed with Trolley",
    "C - Double Block with Spreader"
  ]
};

function updateConfigOptions() {
  const tower = document.getElementById("towerType").value;
  const configDropdown = document.getElementById("riggingConfig");
  configDropdown.innerHTML = "";
  riggingOptions[tower].forEach(option => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.text = option;
    configDropdown.appendChild(opt);
  });
}

// Save selection and go to input page
function goToInputs() {
  const towerType = document.getElementById("towerType").value;
  const rigConfig = document.getElementById("riggingConfig").value;

  const params = new URLSearchParams();
  params.append("tower", towerType);
  params.append("config", rigConfig);

  window.location.href = `inputs.html?${params.toString()}`;
}

window.onload = updateConfigOptions;
