// const yourname = prompt("What is your name?","typing Your name")
// console.log(yourname);

// if(yourname.trim().length!==0 || yourname.trim()!==null) {
//     nameconfirm = confirm(`Are you ${yourname}?`)
// }
// nameconfirm ? alert(`Hello ${yourname}`) : alert (`Hello, Guest`)

// const submitButton = document.querySelector("div>button")
// //add event with annonymous handle function ถอนevent ไม่ได้
// submitButton.addEventListener('click', () => {
//     console.log("Submit button was click");
// })

// //add event with named function ถอน event ได้
// const handlerbutton = () => {
//     console.log("Submit button was click")}
// submitButton.addEventListener("click",handlerbutton)
// submitButton.removeEventListener('click',handlerbutton)

// //ใส่true หลังevent event flowจะเรียงตามลำดับจากบนลงล่าง
// submitButton.addEventListener(
//   "click" , (event) => { 
//     console.log(event.eventPhase)
//     console.log(event.target)
//     console.log(event.currentTarget)
//   }
// )
// const submitButton =document.querySelector("button")
// const divElement = document.querySelector('div')
// const bodyElement = document.querySelector('body')
// const displaymessage = () => {}
// submitButton.addEventListener('click', displaymessage)
// divElement.addEventListener('click', displaymessage)
// bodyElement.addEventListener('click', displaymessage)
 

 
const bolt = document.querySelector('img')
const submitbutton = document.querySelector("div>button")
const divElement = document.querySelector("div")
const bodyElement = document.querySelector("body")
 
function logEvent(event, message) {
    console.log('target:', event.target)
    console.log('currentTarget:', event.currentTarget)
    console.log('eventPhase:', event.eventPhase)
    if (message) console.log(message)
}
 
if (submitbutton) {
    submitbutton.addEventListener('click', (event) => {
        logEvent(event, "Submit button was clicked!")
    })
}
 
if (divElement) {
    divElement.addEventListener('click', (event) => {
        logEvent(event, "Div was clicked!!")
    })
}
 
if (bodyElement) {
    bodyElement.addEventListener('click', (event) => {
        logEvent(event, "body was clicked!!")
    })
}
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is ready!')
  const heading = document.createElement('h2')
  heading.textContent = 'This was added when DOM was ready!'
  document.body.appendChild(heading)
  console.log('Heading added now.')
})
window.addEventListener('load', () => {
  console.log('All resources (images, CSS, scripts) are fully loaded!')
  console.log('Page is fully loaded')
})
 