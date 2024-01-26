const scrollHome = () => {
  const scrollBtn = document.querySelector(".scroll-home");

  window.addEventListener("scroll", () => {
    let yHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (scrollY >= yHeight - 100) {
      scrollBtn.style.display = "block";
    } else if (scrollY <= yHeight - 100) {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
};
scrollHome();
