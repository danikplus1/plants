export function services() {
  function createContent(service) {
    const card = document.createElement("article");
    card.classList.add("card__item");
    card.style.backgroundImage = `url(${service.img})`;

    const section = document.createElement("section");
    section.classList.add("card__content");

    const h3 = document.createElement("span");
    h3.classList.add("card__item-name");
    h3.textContent = `${service.title}: `;
    if (service.title == "Garden care") {
      h3.classList.add("garden");
    } else if (service.title == "Lawn care") {
      h3.classList.add("lawn");
    } else if (service.title == "Planting") {
      h3.classList.add("planting");
    }

    const text = document.createElement("p");
    text.classList.add("card__item-text");
    text.textContent = `${service.text}`;

    section.appendChild(h3);
    section.appendChild(text);
    card.appendChild(section);

    return card;
  }

  function appendContent(content) {
    const card = document.getElementById("card");

    card.appendChild(content);
  }

  fetch("./json/services.json")
    .then((response) => response.json())
    .then((data) => {
      const fragment = document.createDocumentFragment();

      data.forEach((service) => {
        fragment.appendChild(createContent(service));
      });

      appendContent(fragment);
    })
    .catch((error) => console.log(error));
}
