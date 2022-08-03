const toggle = document.querySelector(".toggle");
const basic = document.querySelector(".basic");
const professional = document.querySelector(".professional");
const master = document.querySelector(".master");
let monthly = true;

toggle.addEventListener("click", togglePrice);

function togglePrice() {
    if (monthly === true){
        toggle.classList.add("annually");
        basic.textContent = "199.99";
        professional.textContent = "249.99";
        master.textContent = "399.99";
        monthly = false;
    } else {
        toggle.classList.remove("annually");
        basic.textContent = "19.99";
        professional.textContent = "24.99";
        master.textContent = "39.99";
        monthly = true;
    }

}


console.log(master);