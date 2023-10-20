//animacion de what we do
const whatWeDoSection = document.querySelector(".what-we-do--section");
const titleWhatWeDo = document.querySelector(".titleWhat-we-do");
const whitParrafo = document.querySelector(".whit-parrafo");
const ulListChequed = document.querySelectorAll(".ul-list-chequed");


//adaptar a scroll
//adaptar a scroll

function titleParrafo() {
  titleWhatWeDo.classList.remove("LadderAnimation");
  whitParrafo.classList.remove("LadderAnimation");
}


function ladderSections () {
  let time = 500;
  for (let i = 0; i < ulListChequed.length; i++) {
    time =+ time + 100
    const element = ulListChequed[i];
    setTimeout( () => {
      element.classList.remove("LadderAnimation");
    }, time);
    console.log(time);
    console.log(element);
  }
}





//form
const FormContactContainer = document.querySelector(".Form-Contact--Container");
const inputTextName = document.querySelector(".input-text");
const inputEmail = document.querySelector(".input-Email");
const textareaMessage = document.querySelector("#textarea-message");
const submitButton = document.querySelector(".button-SendMessage");

textareaMessage.addEventListener("input",caracteresContente);
inputTextName.addEventListener("input",nameValidator);
inputEmail.addEventListener("input",emailValidator);

submitButton.addEventListener("click", submitForm,false)

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
  
  if(!caracteresLength) {
    alertMessage.innerText = "You must write something."
    textareaMessage.style = `
    border-bottom: 2px solid red;
    border-right: 2px solid red;
    `
  }else if (caracteresLength === 500) {
    alertMessage.innerText = "Your message can't have more than 500 characters."
    textareaMessage.style = `
    border-bottom: 2px solid red;
    border-right: 2px solid red;
    `
  }   else{
    alertMessage.innerText = ""
    textareaMessage.style = `
    border:1px solid var(--hover-ligth-gray) ;
    `
  }


  if (caracteresLength > 0) {
    contadorDeCaracteres.innerText = caracteresLength + "-500";
  }else{
    contadorDeCaracteres.innerText = "";
  }
FormContactContainer.append(contadorDeCaracteres,alertMessage);
}

function nameValidator(){
  if (/[.*+?^${}()|[\]\\0-9-,¨´"]/.test(inputTextName.value)) {
    inputTextError.innerText = "You can't use numbers or symbols."
    inputTextName.style = `
    border-bottom: 2px solid red;
    border-left: 2px solid red;`
    FormContactContainer.append(inputTextError);
  }else if(inputTextName.value.length === 0) {
    inputTextError.innerText = "You must write something."
    inputTextName.style = `
    border-bottom: 2px solid red;
    border-right: 2px solid red;
    `
    FormContactContainer.append(inputTextError);
  }else{
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


    if ( /[.*+?¿!#%=|°~^${}()-,´"|[\]\\]/.test(firstEmail)) {
      inputTextEmail.innerText = "You can't use symbols."
      inputEmail.style = `
      border-bottom: 2px solid red;
      border-left: 2px solid red;`
      FormContactContainer.appendChild(inputTextEmail);
    }else if ( /[0-9*+?!#%=|°~^${}()-,´"|[\]\\]/.test(secondEmail)) {
      inputTextEmail.innerText = "You can't use symbols."
      inputEmail.style = `
    border-bottom: 2px solid red;
    border-left: 2px solid red;
    `
      FormContactContainer.appendChild(inputTextEmail);
    }else if(inputEmail.value.length === 0) {
      inputTextEmail.innerText = "You must write something."
      inputEmail.style = `
      border-bottom: 2px solid red;
      border-right: 2px solid red;
      `
      FormContactContainer.append(inputTextEmail);
    }else{
      inputTextEmail.innerText = ""
      inputEmail.style = `
      border:1px solid var(--hover-ligth-gray) ;
      `
    };

  /* else{
      inputTextEmail.innerText = ""
      inputEmail.style = `
    border:1px solid var(--hover-ligth-gray) ;
    `
    } */


    if (email.length >= 3) {
      return false
    }/* else if (firstEmail && secondEmail ) {
      if (/[0-9-,._?}{:;`^*+´¨%#"!|°]/.test(firstEmail[0])) {
        return console.log("Tus caracteres iniciales son inbalidos");
      }else if (/[0-9-,._?}{:;`^*+´¨%#"!|°]/.test(secondEmail[1])) {
        return "Tus caracteres despues del @ son invalidos"
      } else{
        return "tu email es valido"
      }
      
    } */
}

function submitForm(event) {
  let email = inputEmail.value
  let name = inputTextName.value
  let textarea = textareaMessage.value

  if (!email || !name || !textarea) {
    emailValidator();
    nameValidator();
    caracteresContente();
    event.preventDefault();
  }
}





//animacion de info contact
const InfoContactContainer = document.querySelector(".Info-Contact--Container");
const sectionDesplace = document.querySelectorAll(".section-desplace");


//adaptar a scroll

function animacionEScalera() {
  let time = 500;
  for (let i = 0; i < sectionDesplace.length; i++) {
    time =+ time + 100
    const element = sectionDesplace[i];
    setTimeout( () => {
      element.classList.remove("LadderAnimation");
    }, time);
    console.log(time);
    console.log(element);
  }
}








