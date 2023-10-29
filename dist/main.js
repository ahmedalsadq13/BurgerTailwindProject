const hamburger = document.getElementById("hamburger");
const mainHeader = document.getElementById("header");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav_link");
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");
const themeBtnIcon = document.querySelector("#theme-toggle i");
// const lightModeBtn = document.getElementById("light-mode-btn");

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  });
});

closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});

hamburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

/* 'Best Menu' tabs */
const bestMenuTabs = document.querySelectorAll(".best_menu_tabs ul li button");
const allMenuItems = document.querySelectorAll(" .item_wrap");
const foods = document.querySelectorAll(".food");
const snacks = document.querySelectorAll(".snack");
const beverages = document.querySelectorAll(".beverage");
bestMenuTabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    bestMenuTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    const tabValue = tab.getAttribute("data-tabs");

    allMenuItems.forEach((item) => {
      item.style.display = "none";
    });

    if (tabValue == "food") {
      foods.forEach((item) => {
        item.style.display = "flex";
      });
    } else if (tabValue == "snack") {
      snacks.forEach((item) => {
        item.style.display = "flex";
      });
    } else if (tabValue == "beverage") {
      beverages.forEach((item) => {
        item.style.display = "flex";
      });
    } else {
      allMenuItems.forEach((item) => {
        item.style.display = "flex";
      });
    }

    // old attemtion to reduce the code " will back to it later :~) "

    /* allMenuItems.forEach((item) => {
      item.classList.remove("hidden");
      if (event.target.getAttribute != "all") {
        if (item.classList.contains(event.target.getAttribute("data-tabs"))) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      } else {
        item.classList.remove("hidden");
      }
    }); */
  });
});

/* Initialize  Swiper */
const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
    },
  },
});

/* Scroll up */
function scrollUp() {
  const scrollUpBtn = document.getElementById("scroll-up");
  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
}
function headerShadow() {
  if (this.scrollY >= 75) {
    mainHeader.classList.add("shadow-md");
  } else {
    mainHeader.classList.remove("shadow-md");
  }
}
window.addEventListener("scroll", () => {
  scrollUp();
  headerShadow();
});

/* Mode checker */
// function changeMode() {
//   if (
//     localStorage.theme === "dark" ||
//     (!("theme" in localStorage) &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches)
//   ) {
//     document.documentElement.classList.add("dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//   }
// }

if (localStorage.getItem("theme") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("theme") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  themeBtnIcon.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("theme", "dark");
}
function lightMode() {
  html.classList.remove("dark");
  themeBtnIcon.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("theme", "light");
}

/* Initialize AOS lib */
AOS.init();
