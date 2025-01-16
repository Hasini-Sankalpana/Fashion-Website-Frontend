// script.js

// Responsive navigation menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
  
    // Toggle the menu on click
    if (menuToggle && navMenu) {
      menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
      });
  
      // Close the menu when a link is clicked (for better UX)
      const navLinks = document.querySelectorAll(".nav-menu a");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("active");
        });
      });
    }
  
    // Automatically close the menu on larger screens
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        navMenu.classList.remove("active");
      }
    });
  });
  
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
  
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
  
  // Responsive image resizing
  const images = document.querySelectorAll("img");
  window.addEventListener("resize", () => {
    images.forEach((img) => {
      if (window.innerWidth < 768) {
        img.style.width = "100%";
        img.style.height = "auto";
      } else {
        img.style.width = "";
        img.style.height = "";
      }
    });
  });
  
  // Dynamic header background change on scroll
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });