export const icons = document.querySelectorAll(".price__item-icon");
icons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    const item = this.parentElement;
    item.classList.toggle("active");
  });
});
