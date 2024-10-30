const consentDiv = document.getElementById("consent-div");
const consentBtn = document.getElementById("consent-close");
let consentClosed = false;

consentBtn.addEventListener("click", e => {
    consentDiv.style.display = "none"
    window.consented = true;
});

if (window.consented) {
    document.getElementById('consent-div').style.display = 'none';
  }
