
// import {CookieUtil} from "../mylibs/cookieUtil.js"

// CookieUtil.set("cartId",'abc123',new Date(2025,10,20))
// console.log(document.cookie);
// console.log(CookieUtil.get("cartId"));
// CookieUtil.unset("cartId")

// // console.log(document.cookie);
// // document.cookie = "theme=dark"
// // document.cookie = "theme=light" // ใส่ชื่อเดิมจะreplace เป็นของใหม่
// // document.cookie = "username=thanawat"
// // document.cookie = `theme=light;expires=${new Date(2025,9,16)}`

//sessionstorage
// let like = sessionStorage.getItem('like')
// if(sessionStorage.getItem('like') === null)
//     sessionStorage.setItem('like', 1)
// else sessionStorage.setItem("like",++like)
// alert(like)

let like = localStorage.getItem('like')
if(localStorage.getItem('like') === null)
    localStorage.setItem('like', 1)
else localStorage.setItem("like",++like)
alert(like)
