const box = document.getElementById('box')

const color = document.querySelectorAll('button[data-color]')
color.forEach(button =>

    button.addEventListener('click',() =>{
    const color = button.dataset.color
    box.style.backgroundColor = color}
)
)