const box = document.getElementById("box")


const add = document.getElementById("add")
add.addEventListener("click" , () => box.classList.add('bordered'))

const remove = document.getElementById("remove")
remove.addEventListener("click", () =>box.classList.remove('bordered'))

const toggle = document.getElementById("toggle")
toggle.addEventListener('click', () => box.classList.toggle('bordered'))