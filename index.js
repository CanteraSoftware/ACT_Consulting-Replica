/* click el button contact now */
const buttonContactNow = document.querySelector(".button-link")
/*click en el nav contact */
const contactNav = document.querySelector('#navBar--contacts')
const navBarHome = document.querySelector("#navBar--home")
const aboutUs = document.querySelector(".about-us")
const personalAttentionContainer = document.querySelector(".Personal-Attention--Container")
const contactLinkHomeContainer = document.querySelector(".Contact-Link-Home--Container")
const footer = document.querySelector("footer")
const homeHeaderImagen = document.querySelector(".Home-Header--imagen");
const homeHeaderText = document.querySelector(".Home-Header--text h1")
const homeHeaderParrafo = document.querySelector(".Home-Header--text p")
buttonContactNow.addEventListener("click", viewContact)
contactNav.addEventListener("click", viewContact)
navBarHome.addEventListener("click", viewHome)
const ourServiceContainer = document.querySelector(".Our-Services--container")
const divServicesContainer = document.querySelectorAll(
  ".Paragraph-Our-Services--container");
const icons = document.querySelectorAll(".open");
const paragraphDescription = document.querySelectorAll(".Paragraph-Our-Services--description");

function toggleDescription(index) {
  divServicesContainer.forEach(function (paragraph, i) {

    if (i === index) {

      paragraph.classList.toggle("container-heigth");

    } else {
      paragraph.classList.remove("container-heigth");
    }

  }

  )
  icons.forEach(function (icono, i) {

    if (i === index) {
      if (!icono.classList.contains("closed")) {
        icono.classList.add("closed");
        icono.textContent = "-"

      } else {
        icono.classList.remove("closed");
        icono.textContent = "+"
      }
    } else {

      if (icono.classList.contains("closed")) {
        icono.classList.remove("closed");
        icono.textContent = "+"
      }

    }
  }

  )
    ;
}

icons.forEach(function (icon, index) {
  icon.addEventListener("click", function () {
    toggleDescription(index);

  });
})


const button = document.querySelectorAll('.buttons-navbar li a');
const navbar = document.querySelector('.bg-nav');

document.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    navbar.style.top = 0
    navbar.classList.add('scrolled');
    button.forEach(item => item.classList.add('scrolled'))
  } else {
    navbar.classList.remove('scrolled')
    button.forEach(item => item.classList.remove('scrolled'))
  }
})
//scroll top
//animacion de what we are
const WhoWeAreContainer = document.querySelector(".Who-We-Are--Container");
const WhoWeAreDescription = document.querySelector(".Who-We-Are--Description");
const WhoWeAreDetails = document.querySelector(".Who-We-Are--Details");

window.addEventListener("scroll", scrollanimacionWhoWeAre);

function scrollanimacionWhoWeAre() {
  if (elementIdentifier(WhoWeAreContainer)) {
    setTimeout(() => {
      WhoWeAreDescription.classList.remove("LadderAnimation");
      WhoWeAreDetails.classList.remove("LadderAnimation");
    }, 400);
  }
}

//animacion de link contac

const contactsLinkes = document.querySelector(".Contact-Link-Home--Container");
const contactsLink = document.querySelector(".contacts-link");

window.addEventListener("scroll", scrollAnimationLinkConc)

function scrollAnimationLinkConc() {
  if (elementIdentifier(contactsLinkes)) {
    setTimeout(() => {
      contactsLink.classList.remove("opacityAnimation");
    }, 500);

  }
}


//animacion de what we do
const whatWeDoSection = document.querySelector(".what-we-do--section");
const titleWhatWeDo = document.querySelector(".titleWhat-we-do");
const whitParrafo = document.querySelector(".whit-parrafo");
const ulListChequed = document.querySelectorAll(".ul-list-chequed");
const whatWeDoSectionContainerul = document.querySelector(".what-we-do--section-Container-ul");


window.addEventListener("scroll", scrollAnimationwhatWeDo);
window.addEventListener("scroll", scrollAnimationwhatWeDoPT);


function titleParrafoAnimation() {
  titleWhatWeDo.classList.remove("LadderAnimation");
  whitParrafo.classList.remove("LadderAnimation");
}

function scrollAnimationwhatWeDoPT() {
  if (elementIdentifier(whatWeDoSection)) { //que hace si esta en la pantalla
    titleParrafoAnimation();
  }/* else {//que hace si no esta en la pantalla
    
  } */
}
function scrollAnimationwhatWeDo() {
  if (elementIdentifier(whatWeDoSectionContainerul)) { //que hace si esta en la pantalla
    ladderSections(ulListChequed);
  }/* else {//que hace si no esta en la pantalla
    console.log("hola mundo");
  } */
}

//form
const FormContactContainer = document.querySelector(".Form-Contact--Container");
const inputTextName = document.querySelector(".input-text");
const inputEmail = document.querySelector(".input-Email");
const textareaMessage = document.querySelector("#textarea-message");
const submitButton = document.querySelector(".button-SendMessage");
/* const imgFormContactMensajes = document.querySelector(".img-form-contact--Mensajes-off");
const imgformX = document.querySelector(".img-form");
const imgFormContactMensajesOn = document.querySelector(".imgFormContactMensajesOn"); */

/* imgformX.addEventListener("click", openMensajes);
imgFormContactMensajesOn.addEventListener("click", openMensajes); */
textareaMessage.addEventListener("input", caracteresContente);
inputTextName.addEventListener("input", nameValidator);
inputEmail.addEventListener("input", emailValidator);
submitButton.addEventListener("click", submitForm, false)


/* Contenedores de textos de Error */
const inputTextError = document.createElement("div");
inputTextError.style = `
position: absolute;
top: 1px;
left: 130px;
color: red;
`

const inputTextEmail = document.createElement("div");
inputTextEmail.style = `
position: absolute;
top: 1px;
left: 480px;
color: red;
`

const alertMessage = document.createElement("div");
alertMessage.style = `
position: absolute;
bottom: 63px;
left: 50px;
color: red;
`

const contadorDeCaracteres = document.createElement("div");
contadorDeCaracteres.style = `
position: absolute;
bottom: 63px;
right: 4px;
`



//Funciones de Formulario
function caracteresContente() {
  let caracteresLength = textareaMessage.value.length

  if (!caracteresLength) {
    alertMessage.innerText = "You must write something."
    textareaMessage.style = `
    border-bottom: 2px solid red;
    border-right: 2px solid red;
    `
  } else if (caracteresLength === 500) {
    alertMessage.innerText = "Your message can't have more than 500 characters."
    textareaMessage.style = `
    border-bottom: 2px solid red;
    border-right: 2px solid red;
    `
  } else {
    alertMessage.innerText = ""
    textareaMessage.style = `
    border:1px solid var(--hover-ligth-gray) ;
    `
  }


  if (caracteresLength > 0) {
    contadorDeCaracteres.innerText = caracteresLength + "-500";
  } else {
    contadorDeCaracteres.innerText = "";
  }
  FormContactContainer.append(contadorDeCaracteres, alertMessage);
}

function nameValidator() {
  if (/[.*+?^${}()|[\]\\0-9-,¨´"]/.test(inputTextName.value)) {
    inputTextError.innerText = "You can't use numbers or symbols."
    inputTextName.style = `
    border-bottom: 2px solid red;
    border-left: 2px solid red;`
    FormContactContainer.append(inputTextError);
  } else if (inputTextName.value.length === 0) {
    inputTextError.innerText = "You must write something."
    inputTextName.style = `
    border-bottom: 2px solid red;
    border-right: 2px solid red;
    `
    FormContactContainer.append(inputTextError);
  } else {
    inputTextError.innerText = ""
    inputTextName.style = `
    border:1px solid var(--hover-ligth-gray) ;
    `
  };
}

function emailValidator() {
  let email = inputEmail.value.split("@");
  let firstEmail = email[0];
  let secondEmail = email[1];


  if (/[.*+?¿!#%=|°~^${}()-,´"|[\]\\]/.test(firstEmail)) {
    inputTextEmail.innerText = "You can't use symbols."
    inputEmail.style = `
      border-bottom: 2px solid red;
      border-left: 2px solid red;`
    FormContactContainer.appendChild(inputTextEmail);
  } else if (/[0-9*+?!#%=|°~^${}()-,´"|[\]\\]/.test(secondEmail)) {
    inputTextEmail.innerText = "You can't use symbols."
    inputEmail.style = `
    border-bottom: 2px solid red;
    border-left: 2px solid red;
    `
    FormContactContainer.appendChild(inputTextEmail);
  } else if (inputEmail.value.length === 0) {
    inputTextEmail.innerText = "You must write something."
    inputEmail.style = `
      border-bottom: 2px solid red;
      border-right: 2px solid red;
      `
    FormContactContainer.append(inputTextEmail);
  } else {
    inputTextEmail.innerText = ""
    inputEmail.style = `
      border:1px solid var(--hover-ligth-gray) ;
      `
  };

  if (email.length >= 3) {
    inputTextEmail.innerText = "Invalid email"
    inputEmail.style = `
    border-bottom: 2px solid red;
    border-left: 2px solid red;
    `
  }
}

function submitForm(event) {
  let email = inputEmail.value
  let name = inputTextName.value
  let textarea = textareaMessage.value

  if (!email || !name || !textarea) {
    event.preventDefault();
    emailValidator();
    nameValidator();
    caracteresContente();
  } else {
    event.preventDefault();
    inputTextName.value = "";
    textareaMessage.value = "";
    inputEmail.value = "";
  }
}


/* const contenedorDeMensajesgENERAL = document.querySelector(".mensajesGenerales");
function nuevoMensaje() {
  if (contenedorDeMensajesgENERAL.length == 0) {
    imgFormContactMensajesOn.classList.toggle("inactive");
  } else if (imgFormContactMensajesOn.classList.contains("inactive")) {
    imgFormContactMensajesOn.classList.remove("inactive");
    imgFormContactMensajes.classList.add("inactive");
  };
}

function openMensajes() {
  contenedorDeMensajesgENERAL.classList.toggle("contenedor-De-Mensajes-gENERAL");
  contenedorDeMensajesgENERAL.classList.toggle("contenedor-De-Mensajes-gENERAL-animation");
  imgformX.classList.toggle("inactive");
}


function mensajesAgregados() {

  const contenedorDeMensajes = document.createElement("div");
  contenedorDeMensajes.style = `
overflow-wrap: break-word;
margin-bottom: 10px;
;
`
  const contenedorDeMensajesName = document.createElement("h1");

  const contenedorDeMensajesGmail = document.createElement("a");

  const contenedorDeMensajesMensaje = document.createElement("p");
  contenedorDeMensajesMensaje.style = `
`

  contenedorDeMensajesName.innerText = `${inputTextName.value}`;

  contenedorDeMensajesMensaje.innerText = `${textareaMessage.value}`;

  contenedorDeMensajesMensaje.innerText = `${textareaMessage.value}`;
  contenedorDeMensajesGmail.innerText = `${inputEmail.value}`;

FormContactContainer.appendChild(contenedorDeMensajesgENERAL);
contenedorDeMensajesgENERAL.append(contenedorDeMensajes);
contenedorDeMensajes.append(contenedorDeMensajesName,contenedorDeMensajesMensaje,contenedorDeMensajesGmail);
} */



//animacion de info contact
const InfoContactContainer = document.querySelector(".Info-Contact--Container");
const sectionDesplace = document.querySelectorAll(".section-desplace");

window.addEventListener("scroll", scrollAnimationInfoContainer);

function scrollAnimationInfoContainer() {
  if (elementIdentifier(InfoContactContainer)) { //que hace si esta en la pantalla
    ladderSections(sectionDesplace);
  } else {//que hace si no esta en la pantalla
    console.log("hola mundo");
  }
}



//funciones generales de animacion

function elementIdentifier(elemento) { //esta funcion entrega si esta o no en la pantalla.

  let longi = elemento.getBoundingClientRect();

  return (
    longi.top < (window.innerHeight || document.documentElement.clientHeight) && longi.bottom > 0
  )

};

/* animacion de escalera */
function ladderSections(contenedores) {
  let time = 500;
  for (let i = 0; i < contenedores.length; i++) {
    time = + time + 100
    const element = contenedores[i];
    setTimeout(() => {
      element.classList.remove("LadderAnimation");
    }, time);
  }
}



function viewContact() {
  whatWeDoSection.classList.add("inactive")
  WhoWeAreContainer.classList.add("inactive")
  aboutUs.classList.add("inactive")
  personalAttentionContainer.classList.add("inactive")
  ourServiceContainer.classList.add("inactive")
  contactLinkHomeContainer.classList.add("inactive")
  FormContactContainer.classList.remove("inactive")
  InfoContactContainer.classList.remove("inactive")
  homeHeaderImagen.style =
    `background: url("/public/assets/img/contact-header.jpg");
    background-size: cover;
    clip-path: none;`
  homeHeaderText.innerText = "We are here to help you."
  homeHeaderParrafo.innerText = `ACT Consulting Inc.
  Your must important accountant.`
  homeHeaderParrafo.style =
    `font-size: 1.7rem
  `
}

function viewHome() {
  whatWeDoSection.classList.remove("inactive")
  WhoWeAreContainer.classList.remove("inactive")
  aboutUs.classList.remove("inactive")
  personalAttentionContainer.classList.remove("inactive")
  ourServiceContainer.classList.remove("inactive")
  contactLinkHomeContainer.classList.remove("inactive")
  footer.classList.remove("inactive")
  FormContactContainer.classList.add("inactive")
  homeHeaderImagen.style =
    ` background: url("/public/assets/img/about-header.jpg");
      background-size: cover;
      clip-path: ellipse(105% 76% at 50% 21%)
      background-repeat: no-repeat;
      background-position: center;
    `
  homeHeaderText.innerText = `Personal & Small
Business`
  homeHeaderParrafo.innerText = `Tax & Bookkeping Services.`
}















