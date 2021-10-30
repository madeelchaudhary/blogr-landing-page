const navToggler = document.querySelector(".nav-toggler");
const dropdownTogglers = document.querySelectorAll(".dropdown-toggler");

navToggler.addEventListener("click", function () {
  document.body.classList.toggle("nav-open");
  dropdownTogglers.forEach((btn) => {
    btn.parentElement.classList.remove("dropdown-open");
  });
});

dropdownTogglers.forEach((btn) => {
  btn.addEventListener("click", dropdownHandler);
});

function dropdownHandler(e) {
  e.currentTarget.parentElement.classList.toggle("dropdown-open");
  dropdownTogglers.forEach((target) => {
    if (e.currentTarget != target) {
      target.parentElement.classList.remove("dropdown-open");
    }
  });
}
