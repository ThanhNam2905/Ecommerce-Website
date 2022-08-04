let tabHeader = document.getElementsByClassName("tab__header")[0];
let tabBody = document.getElementsByClassName("tab__body")[0];

let tabsPane = document.getElementsByClassName("tab__header-title")

for(let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener(("click"), function() {
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByClassName("tab__body-content")[i].classList.add("active");
    })
}

let date = new Date();
let day = date.getDay();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if(month < 10) month = "0" + month;
if(day < 10) day = "0" + day;

document.querySelector("#my-birthday").value = '2022-07-31';

// Select box gender 
const selected = document.querySelector(".selected");
const selectedInnerHTML = document.querySelector(".selected span");
const optionsContainer = document.querySelector(".option-container");
const optionsList = document.querySelectorAll(".option-container .option");

selected.addEventListener(("click"), () => {
    optionsContainer.classList.toggle("active");
})
optionsList.forEach((item) => {
    item.addEventListener(("click"), () => {
        selectedInnerHTML.innerHTML = item.querySelector("label").innerHTML;
        optionsContainer.classList.remove('active');
        item.classList.add("select-option-item"); 

        optionsList.forEach((option) => {
            if(option.classList.contains("select-option-item") && option.querySelector("label").innerHTML !== selectedInnerHTML.innerHTML) {
                option.classList.remove("select-option-item");
            } 
        })
    })
    if(item.querySelector("label").innerHTML === selectedInnerHTML.innerHTML) {
        item.classList.add("select-option-item");
    }
})
