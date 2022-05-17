
const icons = document.querySelectorAll(".idicon")
function answera(answer,id) {
    const icon = document.getElementById(id)
    if (answer.classList.contains("hidden") == true) {
        console.log("um ba la")
        icon.classList.remove("icon_down")
        icon.classList.add("icon_up")
        answer.classList.remove("hidden")
    } else {
        console.log("mat tieu")
        icon.classList.remove("icon_up")
        icon.classList.add("icon_down")
        answer.classList.add("hidden")
    }
}


for (let icon of icons) {
    icon.addEventListener("click", function () {
        const id = icon.id
        switch (id) {
            case "i1":
                const answer1 = document.getElementById("a1");
                answera(answer1, id);
                break;
            case "i2":
                const answer2 = document.getElementById("a2");
                answera(answer2, id);
                break;
            case "i3":
                const answer3 = document.getElementById("a3");
                answera(answer3, id);
                break;
            case "i4":
                const answer4 = document.getElementById("a4");
                answera(answer4, id);
                break;
            case "i5":
                const answer5 = document.getElementById("a5");
                answera(answer5, id);
                break;
        }
    })
}

/* ovelay------------------------ */

const logo = document.querySelector(".sc__logo")
const overlay = document.querySelector("#overlay")
const body = document.body
console.log(logo)
const over = document.querySelector("#over")
const overclose = document.querySelector("#overclose")
function addover(){
    overlay.classList.add("hidden")
    body.classList.remove("over-y")
   logo.classList.remove("hidden")
}
function removeover() {
    overlay.classList.remove("hidden")
    body.classList.add("over-y")
    logo.classList.add("hidden")
}

over.addEventListener("click", removeover)
overclose.addEventListener("click", addover)
