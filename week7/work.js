
//<p format="italic"><i>Sample Italic Text</i></p>
//1. append <p> under <div id="demo">
//1.5 add format='italic' attribute to <p>
//2. try to add three different text types
//2.1 add <i>Sample Italic Text</i> with innerHTML
//2.2  add <i>Sample Italic Text</i> with innerText
//2.3 add <i>Sample Italic Text</i> with textContent
 
//1
const divDemo = document.getElementById('demo')
const pElement = document.createElement("p")
divDemo.append(pElement)
//1.5
pElement.setAttribute("format", "italic")
//2
//2.1
const pElement2 = document.createElement("p")
pElement2.innerHTML = "<i>Sample Italic Text</i>"
 
const pElement3 = document.createElement("p")
pElement3.innerText = "<i>Sample Italic Text</i>"
 
const pElement4 = document.createElement("p")
pElement4.textContent = "<i>Sample Italic Text</i>"
 
divDemo.append(pElement2)
divDemo.append(pElement3)
divDemo.append(pElement4)