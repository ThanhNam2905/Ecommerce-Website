// Selectbox-country
const selectedCountry = document.querySelector(".select-country .selected");
const selectedInnerHTMLCountry = document.querySelector(".select-country .selected span");
const optionsContainerCountry = document.querySelector(".select-country .option-container");
const optionsListCountry = document.querySelectorAll(".select-country .option-container .option-country");

selectedCountry.addEventListener(("click"), () => {
    optionsContainerCountry.classList.toggle("active");
    optionsContainerCity.classList.remove("active");
    optionsContainerDistrict.classList.remove("active");
    optionsContainerWard.classList.remove("active");
})

optionsListCountry.forEach((item) => {
    item.addEventListener(("click"), () => {
        selectedInnerHTMLCountry.innerHTML = item.querySelector("label").innerHTML;
        optionsContainerCountry.classList.remove('active');
        item.classList.add("select-option-item"); 

        optionsListCountry.forEach((option) => {
            if(option.classList.contains("select-option-item") && option.querySelector("label").innerHTML !== selectedInnerHTMLCountry.innerHTML) {
                option.classList.remove("select-option-item");
            } 
        })
    })
    if(item.querySelector("label").innerHTML === selectedInnerHTMLCountry.innerHTML) {
        item.classList.add("select-option-item");
    }
})

// Selectbox-city
const selectedCity = document.querySelector(".select-city .selected");
const selectedInnerHTMLCity = document.querySelector(".select-city .selected span");
const optionsContainerCity = document.querySelector(".select-city .option-container");
const optionsListCity = document.querySelectorAll(".select-city .option-container .option-city");

selectedCity.addEventListener(("click"), () => {
    optionsContainerCity.classList.toggle("active");
    optionsContainerCountry.classList.remove('active');
    optionsContainerDistrict.classList.remove("active");
    optionsContainerWard.classList.remove("active");
})

optionsListCity.forEach((item) => {
    item.addEventListener(("click"), () => {
        selectedInnerHTMLCity.innerHTML = item.querySelector("label").innerHTML;
        optionsContainerCity.classList.remove('active');
        item.classList.add("select-option-item"); 

        optionsListCity.forEach((option) => {
            if(option.classList.contains("select-option-item") && option.querySelector("label").innerHTML !== selectedInnerHTMLCity.innerHTML) {
                option.classList.remove("select-option-item");
            } 
        })
    })
    if(item.querySelector("label").innerHTML === selectedInnerHTMLCity.innerHTML) {
        item.classList.add("select-option-item");
    }
})

// Selectbox-districts
const selectedDistrict = document.querySelector(".select-district .selected");
const selectedInnerHTMLDistrict = document.querySelector(".select-district .selected span");
const optionsContainerDistrict = document.querySelector(".select-district .option-container");
const optionsListDistrict = document.querySelectorAll(".select-district .option-container .option-district");

selectedDistrict.addEventListener(("click"), () => {
    optionsContainerDistrict.classList.toggle("active");
    optionsContainerCountry.classList.remove('active');
    optionsContainerCity.classList.remove('active');
    optionsContainerWard.classList.remove("active");
})

optionsListDistrict.forEach((item) => {
    item.addEventListener(("click"), () => {
        selectedInnerHTMLDistrict.innerHTML = item.querySelector("label").innerHTML;
        optionsContainerDistrict.classList.remove('active');
        item.classList.add("select-option-item"); 

        optionsListDistrict.forEach((option) => {
            if(option.classList.contains("select-option-item") && option.querySelector("label").innerHTML !== selectedInnerHTMLDistrict.innerHTML) {
                option.classList.remove("select-option-item");
            } 
        })  
    })
    if(item.querySelector("label").innerHTML === selectedInnerHTMLDistrict.innerHTML) {
        item.classList.add("select-option-item");
    }
})

// Selectbox-wards
const selectedWard = document.querySelector(".select-ward .selected");
const selectedInnerHTMLWard = document.querySelector(".select-ward .selected span");
const optionsContainerWard = document.querySelector(".select-ward .option-container");
const optionsListWard = document.querySelectorAll(".select-ward .option-container .option-ward");

selectedWard.addEventListener(("click"), () => {
    optionsContainerWard.classList.toggle("active");
    optionsContainerCountry.classList.remove('active');
    optionsContainerCity.classList.remove('active');
    optionsContainerDistrict.classList.remove('active');
})

optionsListWard.forEach((item) => {
    item.addEventListener(("click"), () => {
        selectedInnerHTMLWard.innerHTML = item.querySelector("label").innerHTML;
        optionsContainerWard.classList.remove('active');
        item.classList.add("select-option-item"); 

        optionsListWard.forEach((option) => {
            if(option.classList.contains("select-option-item") && option.querySelector("label").innerHTML !== selectedInnerHTMLWard.innerHTML) {
                option.classList.remove("select-option-item");
            } 
        })  
    })
    if(item.querySelector("label").innerHTML === selectedInnerHTMLWard.innerHTML) {
        item.classList.add("select-option-item");
    }
})