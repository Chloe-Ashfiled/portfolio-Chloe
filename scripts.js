const toggle = document.querySelector(".lightmode");
const icon = document.querySelector(".lightmode i");
const savedTheme=localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("darkmode");
  icon.classList.replace("fa-sun", "fa-moon");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");

  if (document.body.classList.contains("darkmode")) {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "light");
  }
});
