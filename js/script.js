// todoList header
const dayOptions = { weekday: "long" };
const monthOptions = { month: "long" };
const date = new Date();

let currentDay = document.getElementById("currentDay");
currentDay.innerHTML = date.toLocaleDateString("en-US", dayOptions);

let currentDate = document.getElementById("currentDate");

console.log(currentDate.children);
currentDate.children[0].innerHTML = date.getDate();
currentDate.children[1].children[0].innerHTML = date.toLocaleDateString(
  "en-US",
  monthOptions
);
currentDate.children[1].children[1].innerHTML = date.getFullYear();

// switch language
const languageList = document.getElementById("switch-lang");
const body = document.getElementById("body");
const header = document.getElementsByClassName("sub-header")[0];
const theme = document.getElementsByTagName("link")[0];
languageList.onchange = (event) => {
  let lang = event.target.value;
  switch (lang) {
    case "en":
      body.style.direction = "ltr";
      document.documentElement.setAttribute("lang", "en");
      break;
    case "ar":
      body.style.direction = "rtl";
      document.documentElement.setAttribute("lang", "ar");
      break;
    default:
      body.style.direction = "ltr";
  }
};

// todoList
const todoList = [];
const todoListElement = document.querySelector("#todoList");
