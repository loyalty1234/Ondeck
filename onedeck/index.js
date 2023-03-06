const togglebtnicon = document.querySelector(".bar i")
const dropdown = document.querySelector(".dropdown-content")

togglebtnicon.onclick = function (){
    dropdown.classList.toggle('open')
}