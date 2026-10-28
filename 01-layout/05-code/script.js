document.addEventListener("DOMContentLoaded", () => {
  const mburger = document.getElementById("mburger");
  const navLinks = document.getElementById("navLinks");

  if (mburger && navLinks) {
    mburger.addEventListener("click", () => {
      mburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    const links = navLinks.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        mburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  const filterButtons = document.querySelectorAll(".btn-toggle-filters");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const parentSidebar = btn.closest(".sidebar-filters");
      if (parentSidebar) {
        parentSidebar.classList.toggle("open");
      }
    });
  });
});