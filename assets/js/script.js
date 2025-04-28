const menuBtn = document.querySelector(".navbar-toggler");
const menuBtnIcon = document.querySelector(".navbar-toggler span");

menuBtn.addEventListener("click", () => {
  menuBtnIcon.innerHTML = menuBtnIcon.innerHTML === "close" ? "menu" : "close";
});

let body = document.body;
let feaneMenuLink = document.querySelectorAll(".feane-menu .nav-link");
let cardFeaneMenu = document.querySelectorAll(".filter-card");

feaneMenuLink.forEach(function(link) {
  link.addEventListener("click", function(event) {
      event.preventDefault();
      let current = document.querySelectorAll(".feane-menu .active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      const filter = event.target.dataset.filter;
      cardFeaneMenu.forEach((item)=> {
          if (filter === 'all'){
              item.style.display = 'block'
          } else {
              if (item.classList.contains(filter)){
                  item.style.display = 'block'
              } else {
                  item.style.display = 'none'
              }
          }
      })
  })
});


let inputName = document.querySelector("#inputName");
let textForm = document.querySelector(".form-text");

inputName.addEventListener("keydown", function (event){
    if (event.target.value.length < 8 || event.target.value.length > 20) {
        textForm.innerHTML = "";
        textForm.innerHTML = "Your password must be 8-20 characters long.";
        textForm.style.display = "block";
        textForm.style.color = "red";
    } else {
        textForm.innerHTML = "";
        textForm.innerHTML = "Looks good!";
        textForm.style.display = "block";
        textForm.style.color = "green";
    }
});

