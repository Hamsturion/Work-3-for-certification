const slide = () => {
  const slidebox = document.querySelector(".sliding");
  const popup = document.querySelector(".popup");
  const img = slidebox.querySelectorAll(".sliding .img");
  const i = 1;

  img.forEach((element, i) => {
    i++;
    element.style.backgroundImage = `url(./img/school${i}.jpg)`;
  });

  slidebox.addEventListener("mouseover", (event) => {
    if (event.target.className == "img") {
      const t_elment = event.target;

      if (document.documentElement.clientWidth >= 1201) {
        t_elment.style.width = "1000px";
        t_elment.classList.add("grow");
      } else {
        t_elment.classList.add("grow");
      }
      t_elment.addEventListener("mouseout", () => {
        if (document.documentElement.clientWidth >= 1201) {
          t_elment.style.width = "";
          t_elment.classList.remove("grow");
        }
      });

      t_elment.addEventListener("click", () => {
        if (event.target.classList.contains("grow")) {
          const cloneimg = t_elment.cloneNode(true);
          popup.replaceChildren();
          popup.style.display = "block";
          popup.appendChild(cloneimg);
        }
      });
    }
  });

  popup.addEventListener("click", (event) => {
    if (event.target.className == "popup") {
      popup.style.display = "none";
    }
  });
};
slide();
