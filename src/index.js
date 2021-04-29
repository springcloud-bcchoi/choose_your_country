// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const selectElement = document.querySelector(".cuntry");
const COUNTRY = "Cuntry";
selectElement.addEventListener("change", (event) => {
  localStorage.setItem(COUNTRY, event.target.value);
});
function init() {
  const item = localStorage.getItem(COUNTRY);
  if (item != null) {
    for (let i = 0; i < selectElement.options.length; i++) {
      if (item === selectElement.options[i].value) {
        selectElement.selectedIndex = i;
      }
    }
  }
}

init();
