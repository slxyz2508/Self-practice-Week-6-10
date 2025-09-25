// // console.log(window.document) //root node
// // console.log(document) //root node
// // console.log(typeof document)
// // console.log(document.getElementById("123"))
// // const htmlElement = document.documentElement
// // console.log(htmlElement) //เอา element ตัวแรกสุดมี document.childNodes[0] และ document.firstchild เป็น true

// // console.log(htmlElement.parentElement) //null เพราะอยู่บนสุดของ element จึงไม่มีอยู่สูงกว่านั้น
// // console.log(htmlElement.parentNode) //root node 
// // if (htmlElement.parentNode === document) {
// //   console.log("parent of html is a root node") //อยู่ในระดับเดียวกัน
// // }

// // console.log(document.firstChild) //<!DOCTYPE html> อยู่บนสุดรองจาก root node
// // console.log(document.firstChild.nextSibling) // ตัวถัดไป
// // //<!-- sample comment #1 -->
// // console.log(document.firstChild.previousSibling) //null ไม่มีตัวก่อนหน้า เพราะมันคือตัวแรกสุด
// // console.log(document.firstElementChild) //<html> เป็น element หรือลูกคนแรก
// // console.log(document.firstElementChild.previousSibling) //<!-- sample comment #1 -->
// // console.log(document.lastChild) //<!-- sample comment #3 --> ตัวสุดท้าย
// // console.log(document.lastElementChild) //<html lang="en">

// // //1. get all child nodes under <div id='123'>
// // const divElement = document.getElementById("123")

// // //2. get all node types children (return (static) NodeList, can use forEach)
// // const divChildNodes = divElement.childNodes // นับทุกตัวหัวท้ายปิดด้วย #text
// // console.log(divChildNodes.length) //7
// // divChildNodes.forEach((child) => console.log(child))

// // //3. get only Element node type children (retunr (dynamic) HTMLCollection, cannot use forEach)
// // const divChildren = divElement.children // เรียกดูตรงๆ
// // console.log(divChildren.length) //2
// // // for (let i = 0; i < divChildren.length; i++) {
// // //   console.log(divChildren[i])
// // // }
// // Array.from(divChildren).forEach((child) => console.log(child)) //เป็น htmlcollection เสมือน array แต่ไม่ใช่ array ต้องแปลงมันเป็น array ก่อน

// const divElement = document.getElementById("123")
// //1. get all attributes on <div id='123'>
// const divAttrs = divElement.attributes
// console.log(divAttrs.length) //2

// for (let i = 0; i < divAttrs.length; i++) {
//   const attrName = divAttrs[i].name //get attribute name
//   const attrValue = divAttrs[i].value //get attribute value
//   console.log(`attribute name: ${attrName}, attribute value: ${attrValue}`)
//   console.log(divAttrs[i].ownerElement)
// }
// console.log(divElement.getAttribute("id")) //find attribute value
// console.log(divElement.getAttribute("style")) //find attribute value
// //1. What is the node type of first child of root node
// console.log(document.firstChild.nodeType) // 10 DOCUMENT_TYPE_NODE

// //2. if node type is an element node, display "Hello, HTML node", otherwise, display "Hello, any node"
// if (document.firstElementChild.nodeType === Node.ELEMENT_NODE)
//   console.log("Hello, HTML node")
// else console.log("Hello, any node")


//1. create <p></p>
const pElement = document.createElement("p") //<p></p>
//2. create id="p5"
//sol#1
// const idAttr = document.createAttribute("id")
// idAttr.value = "p5"
//Sol#2
pElement.setAttribute("id", "p5")
//3. binding id="p5" to <p>
// pElement.setAttributeNode(idAttr) //<p id="p5"></p5>
//4. create text value '#5'
//sol#1
// const pText = document.createTextNode("#5")
//sol#2
pElement.textContent = "#5"
//5. binding '#5' to <p>
// pElement.appendChild(pText) //<p id="p5">#5</p5>
//6. binding <p id="p5">#5</p5> to <body>
const body = document.body
body.appendChild(pElement) //<body>...<p id="p5">#5</p5></body
 
