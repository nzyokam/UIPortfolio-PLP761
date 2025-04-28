// SIDEBAR ONLY FOR MOBILE DEVICES
function showSideBar() {
  const sidebar = document.getElementById("bar");
  sidebar.classList.add("active");

  const menuItems = document.querySelectorAll(".menu li");
  menuItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("stagger");
    }, 100 * index);
  });
}


function hideSideBar() {
  const sidebar = document.getElementById("bar");
  sidebar.classList.remove("active");

  // Remove stagger animation
  const menuItems = document.querySelectorAll(".menu li");
  menuItems.forEach((item) => {
    item.classList.remove("stagger");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const mobileDropdowns = document.querySelectorAll(".mobile-dropdown");

  mobileDropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      this.classList.toggle("active");
    });
  });
});
//SPECIAL FEATURE- NUMBER COUNTDOWN
// This code will count up to the target number when the user scrolls to the section
const numbers = document.querySelectorAll(".number");
let started = false;

function startCounter() {
  numbers.forEach((number) => {
    const target = +number.getAttribute("data-target");
    const increment = target / 200;

    const updateCount = () => {
      const current = +number.innerText;
      if (current < target) {
        number.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 10);
      } else {
        number.innerText = target;
      }
    };

    updateCount();
  });
}

window.addEventListener("scroll", () => {
  if (started) return; 

  const statsSection = document.querySelector(".stats-section");
  const statsTop = statsSection.getBoundingClientRect().top;
  const statsBottom = statsSection.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;

  if (statsTop < windowHeight && statsBottom > 0) {
    startCounter();
    started = true;
  }
});
