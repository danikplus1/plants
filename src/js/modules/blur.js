export const buttons = document
  .querySelectorAll(".service__button")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const elementsToBlur = document.querySelectorAll(".card__item");
      const clickedClass = button.classList[1];

      elementsToBlur.forEach((element) => {
        const itemName = element.querySelector(".card__item-name");
        const itemSecondClass = itemName.classList[1];

        if (itemSecondClass !== clickedClass) {
          element.classList.add("blur");
        } else {
          element.classList.remove("blur");
        }
      });

      //Reset
      buttons.forEach((otherButton) => {
        if (otherButton !== button) {
          const otherClickedClass = otherButton.classList[1];
          const otherElementsToBlur = document.querySelectorAll(".card__item");

          otherElementsToBlur.forEach((otherElement) => {
            const otherItemName =
              otherElement.querySelector(".card__item-name");
            const otherItemSecondClass = otherItemName.classList[1];

            if (otherItemSecondClass !== otherClickedClass) {
              otherElement.classList.remove("blur");
            }
          });
        }
      });
    });
  });
