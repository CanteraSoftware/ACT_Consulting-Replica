/* const open = document.querySelectorAll(".open");

open.forEach((item) =>
  item.addEventListener("mouseover", () => {
    item.innerText = "-";
  })
); */

const divServicesContainer = document.querySelectorAll(
  ".Paragraph-Our-Services--container");
const icons = document.querySelectorAll(".open");
const paragraphDescription = document.querySelectorAll(".Paragraph-Our-Services--description");



//funcion para aparecer los parrafos de descripcion

// function openDescription() {
//   if (
//     divServicesContainer.forEach((paragraphDescription) => {
//       paragraphDescription.classList.contains("inactive")

//     })
//   ) {
//     divServicesContainer.forEach((paragraphDescription) => {
//       paragraphDescription.classList.remove("inactive");

//     });
//   } else {
//     divServicesContainer.forEach((paragraphDescription) => {
//       paragraphDescription.classList.add("inactive");
//     });
//   }
// }
function toggleDescription(index) {
  paragraphDescription.forEach(function (paragraph, i) {
    if (i === index) {
      paragraph.classList.toggle("inactive");
    } else {
      paragraph.classList.add("inactive");
    }
  });
}

icons.forEach(function (icon, index) {
  icon.addEventListener("click", function () {
    toggleDescription(index);
  });
})