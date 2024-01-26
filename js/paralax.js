const paralax = () => {
  document.addEventListener("mousemove", (event) => {
    document.querySelectorAll(".parallax-wrap img").forEach((shift) => {
      const position = shift.getAttribute("value");

      const x = (window.innerWidth - event.pageX * position) / 100;
      const y = (window.innerHeight - event.pageY * position) / 100;

      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  });
};
paralax();
