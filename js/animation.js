document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".hidden").forEach((element) => {
    observer.observe(element);
  });
});
