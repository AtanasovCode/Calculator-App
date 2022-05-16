const buttons = Array.from(document.querySelectorAll(".button"));
const display = document.querySelector(".output");
 
buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch(e.target.value) {
            case "AC":
                display.textContent = "";
                break;
            case "C": 
                display.textContent = display.innerHTML.slice(0, -1);
                break;
            case "=":
                try {
                    display.textContent = eval(display.textContent);
                } catch {
                    display.textContent = "Error";
                }
                break;
            default:
                display.textContent += e.target.value;
        }
    })
})