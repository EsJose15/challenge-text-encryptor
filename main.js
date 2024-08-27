// Elements
const buttonEncrypt = document.getElementById("btn-encrypt");
const buttonUnencrypt = document.getElementById("btn-unencrypt");
const buttonCopyContent = document.getElementById("btn-copy-content");
const textInputArea = document.getElementById("text-area-input");
const textOutputArea = document.getElementById("text-area-output");
const contentTextNotFound = document.getElementById("not-found");

// functions
const validCharacter = (text) => {
  const regex = /^[a-zA-Z\s]*$/;
  return regex.test(text);
}
const showContentText = () => {
  contentTextNotFound.classList.add("hidden");
  textOutputArea.classList.remove("hidden");
  buttonCopyContent.classList.remove("hidden");
}
const hiddenContentText = () => {
  contentTextNotFound.classList.remove("hidden");
  textOutputArea.classList.add("hidden");
  buttonCopyContent.classList.add("hidden");
}
const encryptWords = (text) => {
  let newText = "";
  for (let index = 0; index < text.length; index++) {
    const element = text[index];
    if (element === "e") newText += "enter";
    else if (element === "i") newText += "imes";
    else if (element === "a") newText += "ai";
    else if (element === "o") newText += "ober";
    else if (element === "u") newText += "ufat";
    else if (element === " ") newText += " ";
    else newText+= element;
  }
  return newText;
}
const unencryptWords = (text) => {
  let copyText = text;
  const replacements = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
  };

  Object.keys(replacements).forEach(key => {
    copyText = copyText.replace(new RegExp(key, 'g'), replacements[key]);
  });
  return copyText;
}
// handle functions
const handleButtonEncrypt = () => {
  const text = textInputArea.value.toLowerCase();
  if (text.trim() === ""){
    hiddenContentText();
  } else if (!validCharacter(text)) {
    alert("Tiene un caracter invalido, no es posible procesarlo");
  } else {
    const newText = encryptWords(text);
    textOutputArea.textContent = newText;
    showContentText();
  }
}
const handleButtonUnencrypt = () => {
  const text = textInputArea.value.toLowerCase();
  if (text.trim() === ""){
    hiddenContentText();
  }
  else if (!validCharacter(text)) {
    alert("Tiene un caracter invalido, no es posible procesarlo");
  } else {
    const newText = unencryptWords(text);
    textOutputArea.textContent = newText;
    showContentText();
  }
}
const handleButtonCopy = () => {
  const text = textOutputArea.value;
  navigator.clipboard.writeText(text);
}

// Asign
buttonEncrypt.addEventListener("click", handleButtonEncrypt);
buttonUnencrypt.addEventListener("click", handleButtonUnencrypt);
buttonCopyContent.addEventListener("click", handleButtonCopy);