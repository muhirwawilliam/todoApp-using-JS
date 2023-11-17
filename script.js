const inputList = [];

const button = document.querySelector(".send");
const inputData = document.querySelector(".textContent");
const list = document.querySelector(".list");
const enter = document.querySelector("body");

window.onload = updateList;

//Assignment of enter key and Add ToDo butt
button.addEventListener("click", input, false);
enter.addEventListener("keydown", input, false);

// This function stores your ToDo in your local storage
function input(e) {
  if (e.keyCode == 13 || e.target.className == "send") {
    inputList.push(inputData.value);
    UpdateStorage(inputList);
    updateList();
  }
}

function updateList() {
  list.innerHTML = "";
  inputList = JSON.parse(localStorage.getItem("note")) || [];
  for (i = 0; i < inputList.length; i++) {
    const str = document.createElement("li");
    str.innerHTML = "<a href=" + "" + ">👍</a>" + "| " + inputList[i];
    list.appendChild(str);
    str.setAttribute("data-num", i);
  }
}
function UpdateStorage(listItem) {
  const storage = JSON.stringify(listItem);
  localStorage.setItem("note", storage);
}

list.addEventListener("click", remove, false);

function remove(e) {
  if (e.target.nodeName == "A") {
    e.preventDefault();
    var arrayNum = e.target.parentNode.dataset.num;
    inputList.splice(arrayNum, 1);
    UpdateStorage(inputList);
    updateList();
  } else {
    return;
  }
}
