const theme = () => {
  const themeListener = document.querySelector(".flags-wrap");
  const themeBtns = themeListener.querySelectorAll(".flags-wrap .flag");

  const i = 1;

  themeBtns.forEach((element, i) => {
    i++;
    element.classList.add(`theme_${i}`);
  });

  const changeTheme = (color) => {
    const defLink = document.getElementById("theme");
    const newlink = document.createElement("link");
    newlink.setAttribute("id", "theme");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", `/css/color-theme-${color}.css`);
    document.getElementById("theme").replaceWith(newlink);
  };

  themeListener.addEventListener("click", (e) => {
    if (e.target.classList.contains("theme_1")) {
      changeTheme("blue");
    } else if (e.target.classList.contains("theme_2")) {
      changeTheme("green");
    } else if (e.target.classList.contains("theme_3")) {
      changeTheme("red");
    } else if (e.target.classList.contains("theme_4")) {
      changeTheme("yellow");
    }
  });
};

theme();
