// Lesson 3 - Events Starter
import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js';
let quotes = []

// Select DOM elements
// const quoteList =
const quoteList = document.getElementById('quote-list')
// const form = ...
const form = document.getElementById('quoteForm')
// const contentInput =
const contentInput = document.getElementById('content')
// const authorInput =
const authorInput = document.getElementById('author')
// const idInput = 
const idInput = document.getElementById('quoteId')
// const randomBtn =
const randomBtn = document.getElementById('randomBtn')
// const randomDisplay =
const randomDisplay = document.getElementById('randomQuoteDisplay')
function createQuoteElement(quote) {
  // a quote element example
  //<section id="quote-list">
  //  <div data-id="1"> 
  //    <p>Confidence comes from discipline and training</p>
  //    <p>Robert</p>
  //    <button class="edit-btn" data-id="1">
  //      Edit
  //    </button>
  //    <button class="delete-btn" data-id="1">
  //      Delete
  //    </button>
  //  </div>
  // </section>/
  
  const div = document.createElement('div')
  div.dataset.id = quote.id

  const pname = document.createElement('p')
  pname.textContent = `"${quote.content}"`

  const pauthor = document.createElement('p')
  pauthor.textContent  = `"${quote.author}"`
  
  const buttonedit = document.createElement('button')
  buttonedit.textContent = "Edit"
  buttonedit.classList.add('edit-btn')
  buttonedit.dataset.id = quote.id


  const buttondelete = document.createElement('button')
  buttondelete.textContent ="Delete"
  buttondelete.classList.add('delete-btn')
  buttondelete.dataset.id = quote.id

  buttonedit.addEventListener('click',() => {
    idInput.value = quote.id
    contentInput.value = quote.content
    authorInput.value = quote.author
  })
  buttondelete.addEventListener('click',() =>{
    deleteQuote(quote.id)
    deleteQuoteFromDOM(quote.id)
  })
  
  div.appendChild(pname)
  div.appendChild(pauthor)
  div.appendChild(buttonedit)
  div.appendChild(buttondelete)
  return div
}
// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
  const el = createQuoteElement(quote)
  quoteList.appendChild(el)
}
function updateQuoteInDOM(quote) {
  const div = quoteList.querySelector(`[data-id="${quote.id}"]`)
  if (div) {
    div.querySelectorAll('p')[0].textContent = `"${quote.content}"`
    div.querySelectorAll('p')[1].textContent = `— ${quote.author}`
  }
}
function deleteQuoteFromDOM(id) {
  const div = quoteList.querySelector(`[data-id="${id}"]`)
  if (div) div.remove()
}
function renderQuotes() {
  quoteList.innerHTML = ''
  getAllQuotes().forEach(addQuoteToDOM)
}
function showRandomQuote() {
  const quotes = getAllQuotes()
  if (quotes.length === 0) {
    randomDisplay.textContent = '-- No quotes to show --'
    return
  }
  const random = quotes[Math.floor(Math.random() * quotes.length)]
  randomDisplay.textContent = `"${random.content}" — ${random.author}`
}
// Event listeners for form submission, edit, and delete clicks
form.addEventListener('submit', (e) => {
  e.preventDefault()

  const content = contentInput.value.trim()
  const author = authorInput.value.trim()
  const id = Number(idInput.value)

  if (!content || !author) return

  if (id) {
    const updated = updateQuote(id, content, author)
    updateQuoteInDOM(updated)
  } else {
    const newQuote = addQuote(content, author)
    addQuoteToDOM(newQuote)
  }

  form.reset()
  idInput.value = ''
})

// --- Random quote button ---
randomBtn.addEventListener('click', showRandomQuote)

// --- Initial render ---
renderQuotes()