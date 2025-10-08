const input = document.getElementById("keyInput");
const keyLog = document.getElementById("keyLog");
 
input.addEventListener("keydown", function(event) {
    const p = document.createElement("p");
 
    if(event.key === "Enter"){
        p.style.color = "blue";
        p.textContent = "You pressed: Enter";
    } else {
        p.style.color = "black";
        p.textContent = "You pressed: " + event.key;
    }
 
    keyLog.appendChild(p);
});