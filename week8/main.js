// //1. display all child nodes under <ul id= 'appetizer'>
// //013 ผมชื่อไม้สุดหล่อ
// const appetizerElement = document.getElementById('appetizer')
// const appeElement = document.querySelector('#appetizer')
// console.log(document.querySelector('.meat')); //       <li class="meat">Chicken Wings</li>
// console.log(document.querySelector('.menu')); //       return child ทั้งหมด

// console.log(appetizerElement.childNodes);
// console.log(appeElement); // 

//2 find meat element thata text value contains soup
// const meats = document.getElementsByClassName("meat")
// for (const element of meats) {
//     const name = element.innerHTML.toLowerCase()
//     if (name.includes("soup")){
//         console.log(element)
//         console.log(name)
//     }
// }
// 3. go to the first child element node under <ul id='soop> and traverse all sibling nodes
// const soupchild = document.querySelector('#soup')
// let currentnode = soupchild.firstElementChild
// while(currentnode !==null){
//     console.log(currentnode);
//     currentnode = currentnode.nextElementSibling
    
    
// }
    
// //1.getElementByName(), return Nodelist data type
// const nameattr = document.getElementsByName('fname')
// console.log(nameattr.length);


// nameattr.forEach(element => {
//     console.log(element);
    
// });


// //2.getElementByClassname(), return HTMLCollection data type
// const classElement = document.getElementsByClassName('vegan')
// Array.from(classElement).forEach((ele)=> console.log(ele));

// //3.getElementByTag(), return HTMLCollection data type
// const inputElement = document.getElementsByTagName('input')
// Array.from(inputElement).forEach((ele)=> console.log(ele));

// //013 ผมไม้สุดหล่อมาดูแมวที่ห้อง
// //4. find the first element of document that has an id values "appetizer" or "soup"
// const felement = document.querySelector('#appetizer,#soup')
// console.log(felement.firstElementChild);

// //5. find all meat element under id appetizer or id soup
// const elements = document.querySelectorAll("ul#appetizer .meat,ul#soup .meat")
// elements.forEach((ele) => console.log(ele))


// // (insertBefore) 1. <li class="vegan">Cabbage Soup</li>
// //1.1 get its parent
// const soupUlElement = document.getElementById("soup")
// //1.2 get ref node -Beef Soup
// let refNode = null
// Array.from(soupUlElement.children).forEach((element) => {
//   if (element.textContent.trim().includes("Beef Soup")) refNode = element
// })
// //1.3 create node <li class="vegan">Cabbage Soup</li>
// const newNode = document.createElement("li")
// newNode.textContent = "Cabbage Soup"
// newNode.setAttribute("class", "vegan")
// //1.4 insertBefore(newNode, refNode)
// soupUlElement.insertBefore(newNode, refNode)

// //2. remove vegetable soup
// // 2. remove Vegetable Soup
// //2.1 get its parent
// const soupUlElement = document.getElementById("soup")
// //2.2 get ref node -Beef Soup
// let refNode = null
// Array.from(soupUlElement.children).forEach((element) => {
//   if (element.textContent.trim() === "Vegetable Soup") refNode = element
// })
// //2.3 remove
// soupUlElement.removeChild(refNode)

// //  3. replace Beef Soup with Pork Soup
// //2.1 get its parent
// const soupUlElement = document.getElementById("soup")
// //2.2 get ref node -Beef Soup
// let refNode = null
// Array.from(soupUlElement.children).forEach((element) => {
//   if (element.textContent.trim() === "Beef Soup") refNode = element
// })
// //2.3 create new node <li class="meat">Pork Soup</li>
// const newNode = document.createElement("li")
// newNode.textContent = "Pork Soup"
// newNode.setAttribute("class", "meat")
// //2.4 replaceChild(newNode, refNode)
// soupUlElement.replaceChild(newNode, refNode)