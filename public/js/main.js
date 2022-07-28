let tabHeader = document.getElementsByClassName("tab__header")[0];
let tabBody = document.getElementsByClassName("tab__body")[0];

let tabsPane = tabHeader.getElementsByTagName("h4");

for(let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener(("click"), function() {
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByClassName("tab__body-content")[i].classList.add("active");
    })
}