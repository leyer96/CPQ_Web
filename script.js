const consentDiv = document.getElementById("consent-div");
const consentBtn = document.getElementById("consent-close");

consentBtn.addEventListener("click", e => {
    consentDiv.style.display = "none"
});