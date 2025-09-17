//functional programming
//higher order --> 1.รับfunction เป็น parameter หรือ 2.return เป็น function

const greet = (name,formatter) => formatter(name)
const shout = text => text.toUpperCase() + "!!!"

console.log(greet("Mai",shout));
// ตัวอย่าง higher order
function calculate(nums, compute) {
  return compute(nums)
}
function sum(elements) {
  return elements.reduce((total, current) => total + current)
}
function max(elements) {
  return Math.max(...elements)
}
function min(elements) {
  return Math.min(...elements)
}
function sort(elements) {
  return elements.sort((a, b) => a - b)
}
console.log(calculate([1, 3, 5, 7], sum))
console.log(calculate([100, 3, 5, 7], max))
console.log(calculate([10, 2, 0, 7], min))
console.log(calculate([10, 2, 0, 7], sort))


//pure function ผลลัพย์เหมือนเดิมเสมอ หรือไม่กระทบ global scope
//impure ตรงกันข้าม

const pureF = (a,b) => a*b
console.log(pureF(2,3)); //6
console.log(pureF(2,3)); //6
//ใช้ global variable ถ้า x เปลี่ยนผลลัพย์เปลี่ยน ต่อให้y เท่าเดิม
let x = 10
let y = 20
function impureF(arg){
    arg = arg + x *2
    x += 1
    return arg
}
console.log(impureF(y)); //40
console.log(impureF(y)); //42

//Anonymous Function ใช้ได้เฉพาะ arrow กับ function expression มักใช้กับ callback

//function expression
// function () {}
//arrow function
// = () => {}

//Named Function ฟังก์ชันที่ มีชื่อ 

function foo() {
  console.log("foo");
}

// named function expression
const barFn = function bar() {
  console.log("bar");
};

// arrow function (assigned to variable, technically anonymous แต่ใช้ชื่อผ่านตัวแปร)
const barAF = () => {
  console.log("arrow function");
};

//an inner(nested) function ฟังก์ชันซ้อนฟังก์ชัน

function addSquares(a,b) {
 function square(x){
    return x*x
 }
 return square(a) + square(b)// ทำฟังก์ชันนี้เป็นหลักเพราะอยู่นอกสุด
}
function a() {
  return sum
}
function b() {
  return sum(1, 5)
}
function c(x) {
  return x
}
function sum(n1, n2) {
  return n1 + n2
}

console.log(typeof a()) //function
console.log(typeof b()) // ได้ number เพราะ return ออกมาเป็นตัวเลข
console.log(typeof c(sum)) //ได้ function เพราะ รับ parameter เป็น function
// วิธีเรียกใช้ function ที่เป็น inner จากนอกสุด

// function doSomething(x) {
  
//   function echo() {
//     console.log('echo success');
    
//   }
//   return "test succesfull" , echo
  
// }
// // console.log(doSomething("guest"))
// // a = 100
// // console.log(`a= ${a}`)
// console.log(doSomething('guest')());
// console.log(doSomething('test'))
function doSomething(x) {
  function echo() {
    return `hello,${x}`
  }
  return echo
}
console.log(doSomething("guest")()) //เรียกใช้ inner function จากภายนอก

//closure 1.เป็น nested 2.อ้างถึงglobal และ outer 3. outer return inner
 
 function makeAdder(x){
    function add(y) {
      return x+y
    }
    return add
 }

 const add5 =makeAdder(5) //เก็บค่า5เอาไว้
 const add10 = makeAdder(10)
 console.log(add5(3)); 
 console.log(add10(3));

 function idGenerator(){
    let id = 0 // ค่าเริ่มต้น
    function loop(){
        id += 1
        return id
    }
    return loop
}
const idGen = idGenerator()
console.log(idGen()) //1
console.log(idGen()) //2
console.log(idGen()) //3
 