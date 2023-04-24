// Select all Nav Menues in Array like structure
const navMenue = document.querySelectorAll(".nav_menue");

// Each Nav Menue Element from Array will get an Event Listener
navMenue.forEach((dropDownItem) => {
  dropDownItem.addEventListener("click", dropDownHandler);
});

function dropDownHandler() {
  // Check for child elments in selected Drop Down element
  if (this.children.length) {
    // Toggle's visibility of selected Nav Menue
    this.children[0].classList.toggle("sub_nav");
  }
}
