//Animace hamburgr menu

const hmrgr = () => {
  const dropdown = document.getElementById("dropdown");
  const menuIcon = document.querySelector(".menu-icon");
  const svg = menuIcon.querySelector("svg");

  const menuIconListenClic = () => {
    svg.addEventListener("click", () => {
      svg.classList.toggle("active");
      dropdown.classList.toggle("off");
    });
  };

  const mainSectionListenClic = () => {
    document.querySelector("main").addEventListener("click", () => {
      if (dropdown.classList.contains("off")) {
        svg.classList.remove("active");
        dropdown.classList.remove("off");
      }
    });
  };

  menuIconListenClic();
  mainSectionListenClic();
};

hmrgr();
