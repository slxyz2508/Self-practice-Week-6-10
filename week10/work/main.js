
document.addEventListener('DOMContentLoaded', () => {
    const bgColorInput = document.getElementById('bgColor')
    const fontColorInput = document.getElementById('fontColor')
    const fontSizeSelect = document.getElementById('fontSize')

    function applySettings(bgColor,fontColor,fontSize){
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = fontColor;

        switch( fontSize) {
            case "small" :
            document.body.style.fontSize = "12px";
            break
             case "medium" :
            document.body.style.fontSize = "16px";
            break
             case "large" :
            document.body.style.fontSize = "20px";
            break
        }
    }
    const savedSettings = JSON.parse(localStorage.getItem("userSettings"));
    if(savedSettings) {
        bgColorInput.value = savedSettings.bgColor
        fontColorInput.value =savedSettings.fontColor
        fontSizeSelect.value =savedSettings.fontSizeSelect
        applySettings( savedSettings.bgColor , savedSettings.fontColor,savedSettings.fontSizeSelect)
    }

    document.getElementById('saveBtn').addEventListener('click',() => {
        const setting = {
            bgColor : bgColorInput.value,
            fontColor : fontColorInput.value,
            fontSize : fontSizeSelect.value
        };
        localStorage.setItem("userSettings", JSON.stringify(setting));
        applySettings(setting.bgColor,setting.fontColor,setting.fontSize)
        alert("Save Your setting")
    })
      document.getElementById("resetBtn").addEventListener("click", () => {
    localStorage.removeItem("userSettings");
    bgColorInput.value = "#ffffff";
    fontColorInput.value = "#000000";
    fontSizeSelect.value = "medium";
    applySettings("#ffffff", "#000000", "medium");
    alert("รีเซ็ตค่าเรียบร้อย!");
})
});

 

