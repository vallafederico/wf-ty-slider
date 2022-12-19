export function insertItem(wrapper, target) {
  const items = [...wrapper.querySelectorAll("[data-add-slide]")];

  if (items && items.length > 0)
    items.forEach((item) => {
      const clone = item.cloneNode(true);

      if (item.dataset.addSlide === "end") {
        target.appendChild(clone);
      } else {
        target.insertBefore(clone, target.firstChild);
      }

      item.remove();
    });
}
