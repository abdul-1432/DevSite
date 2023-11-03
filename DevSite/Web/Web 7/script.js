document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const navbar = document.getElementById("navbar");
  
    sections.forEach((section) => {
      const id = section.id;
      const color = section.dataset.color;
      section.style.backgroundColor = color;
  
      const navItem = document.createElement("div");
      navItem.className = "nav-item";
      navItem.textContent = id.toUpperCase();
      navItem.dataset.target = id;
  
      navItem.addEventListener("click", function() {
        document.getElementById(this.dataset.target).scrollIntoView();
      });
  
      navbar.appendChild(navItem);
    });
  
    window.addEventListener("scroll", function() {
      let lastSection = null;
  
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const navItem = document.querySelector(`.nav-item[data-target="${section.id}"]`);
  
        if (rect.top <= 0) {
          navItem.classList.add("show");
          lastSection = section.id;
        }
      });
  
      if (lastSection) {
        const navItems = navbar.querySelectorAll(".nav-item");
        let found = false;
  
        navItems.forEach((navItem) => {
          if (!found) {
            navItem.classList.add("show");
          }
  
          if (navItem.dataset.target === lastSection) {
            found = true;
          }
        });
      }
    });
  });
  