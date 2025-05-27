
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");

  body.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
  changeMainLogo();
  changeThemeBtnIcon();
}

function changeMainLogo() {
  const logo = document.getElementById("logo");

  if (!logo) {
    return;
  }
  
  const currentSrc = logo.src;

  if (currentSrc.includes("assets/images/logo-light.svg")) {
    logo.src = "assets/images/logo-dark.svg";
  } else if (currentSrc.includes("assets/images/logo-dark.svg")) {
    logo.src = "assets/images/logo-light.svg";
  }
}

function changeThemeBtnIcon() {
  const icon = document.getElementById("icon-theme");

  if (!icon) {
    return;
  }
  
  const currentSrc = icon.src;

  if (currentSrc.includes("assets/images/icon-sun.svg")) {
    icon.src = "assets/images/icon-moon.svg";
  } else if (currentSrc.includes("assets/images/icon-moon.svg")) {
    icon.src = "assets/images/icon-sun.svg";
  }
}


 function openModal() {
    document.getElementById("myModal").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  