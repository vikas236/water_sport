const navW = (() => {
  const nav = document.querySelector("nav");
  const ham = document.querySelector(".home .ham");
  const home = document.querySelector(".home");
  const wall = document.querySelector(".nav_wall");

  function navActivity() {
    ham.addEventListener("click", enableNav);
    wall.addEventListener("click", disableNav);
  }
  navActivity();

  function enableNav() {
    nav.classList.add("active");
    home.style.right = "250px";
    wall.classList.add("active");
  }

  function disableNav() {
    nav.classList.remove("active");
    home.style.right = "0px";
    wall.classList.remove("active");
  }
})();

export default navW;
