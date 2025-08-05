let toggler = document.querySelector(".navbar-toggler"); 
let darkModeIcons = document.querySelectorAll(".nav-dark2"); 
let navbar = document.querySelector("#navbar-example2");
let navActive = document.querySelectorAll(".navbar-nav .nav-item .active");
let navLinks = document.querySelectorAll(".nav-item .nav-link");
let brand = document.querySelector(".navbar-brand");
darkModeIcons.forEach(iconContainer => {
  iconContainer.addEventListener("click", function () {
    let allIcons = document.querySelectorAll(".nav-dark2 svg"); 
    let isDark = allIcons[0].classList.contains("fa-moon"); 
    allIcons.forEach(icon => {
      icon.classList.toggle("fa-moon", !isDark);
      icon.classList.toggle("fa-sun", isDark);
      icon.style.color = isDark ? "white" : "black";
    });

   
    if (isDark) {
      document.documentElement.style.setProperty("--mainColor", "#c17e1f");
      document.documentElement.style.setProperty("--modeBg", "#252525");
      document.documentElement.style.setProperty("--modeColor", "white");
      document.documentElement.style.setProperty("--hoverColor", "#c4862eff");
      document.documentElement.style.setProperty("--whiteColor", "black");
      document.documentElement.style.setProperty("--paragraph", "#9f9f9f");
      document.documentElement.style.setProperty("--bodyBg", "#202020");
      document.documentElement.style.setProperty("--contactInfo", "black");
      document.documentElement.style.setProperty("--contactBg", "#171717");
      toggler.classList.add("dark");
      navbar.classList.add("bg-dark");
      navbar.classList.remove("bg-body-tertiary");
    } else {
      document.documentElement.style.setProperty("--mainColor", "#ce1212");
      document.documentElement.style.setProperty("--modeBg", "#eee");
      document.documentElement.style.setProperty("--modeColor", "black");
      document.documentElement.style.setProperty("--hoverColor", "#ea1919");
      document.documentElement.style.setProperty("--whiteColor", "white");
      document.documentElement.style.setProperty("--paragraph", "black");
      document.documentElement.style.setProperty("--bodyBg", "white");
      document.documentElement.style.setProperty("--contactInfo", "#f5f5f5");
      document.documentElement.style.setProperty("--contactBg", "white");
      toggler.classList.remove("dark");
      navbar.classList.remove("bg-dark");
      navbar.classList.add("bg-body-tertiary");
    }
  });
});
