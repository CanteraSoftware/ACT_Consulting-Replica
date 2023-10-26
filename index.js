const divServicesContainer = document.querySelectorAll(
  ".Paragraph-Our-Services--container"
);
const icons = document.querySelectorAll(".open");

const paragraphDescription = document.querySelectorAll(
  ".Paragraph-Our-Services--description"
);

const span = document.querySelectorAll(".spanANim");

//funcion para aparecer los parrafos de descripcion

function toggleDescription(index) {
  paragraphDescription.forEach(function (paragraph, i) {
    if (i === index) {
      paragraph.classList.toggle("inactive");
    } else {
      paragraph.classList.add("inactive");
    }
  });
}
console.log(icons);
/* icons.forEach(
  icon.addEventListener("click", function () {
    toggleDescription(index);
  });

}); */

function iterateSpans() {
  console.log("EAntanjanja");
  for (let i = 0; i < span.length; i++) {
    const element = span[i];
    if (element.length) {
    }
  }

  span.forEach((spanItem) => {
    spanItem.style = ` top: -20%;
  left: 16%;
  transform-origin: left center;
  transform: rotate(90deg);`;
  });
}
icons.forEach((item) => item.addEventListener("click", iterateSpans));
