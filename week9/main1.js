const submitButton = document.getElementById("submit")
const usernameInput = document.getElementById("username")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const confirmPasswordInput = document.getElementById("confirm-password")
const text = document.querySelector("p")
 
const onSubmitButtonClick = (event=MouseEvent) => {
    event.preventDefault()
    const username = usernameInput.value
    const email = emailInput.value
    const p1 = passwordInput.value
    const p2 = confirmPasswordInput.value
    if (!username.value || !email.value || !password.value || !confirms.value) {
        text.textContent = "missing some values, please try again!"
        text.style.color = "red"
    }else if(p1 !== p2){
        text.textContent = "password and confirm do not match check again"
        text.style.color = "red"
    }else{
        text.textContent = "your data completed"
        text.style.color = "green"
    }
}
submitButton.addEventListener("click", onSubmitButtonClick)
 