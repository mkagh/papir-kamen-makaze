let comp = ["slike/kamen.jfif", "slike/papir.jfif", "slike/ze.png"]

let mojRez = 0
let compRez = 0
const pocetni = document.querySelector(".pocetni")
const single = document.querySelector(".single")
const singlePlayerMode = document.querySelector(".single-player")
const myChoice = document.querySelector(".myChoice img")
let compChoice = document.querySelector(".compChoice img")
const izbori = document.querySelectorAll(".izbor button")
const racunar = document.querySelector(".racunar")
const ti = document.querySelector(".ti")
const resultField = document.querySelector(".macevi h3")
const afterGame = document.querySelector(".afterGame")
const again = document.querySelector(".again")
const exit = document.querySelector(".exit")
console.log(compChoice)
let remove
single.addEventListener("click", () => {
    pocetni.style.display = "none"
    console.log("radi")
})

izbori.forEach((izbor) => {
    izbor.addEventListener("click", function neka(e) {

        console.log("nesto")


        remove = true
        const found = e.target.getAttribute("src")
        myChoice.setAttribute("src", found)
        compChoice.setAttribute("src", comp[Math.floor(Math.random() * comp.length)])

        switch (true) {
            case myChoice.getAttribute("src") === "slike/papir.jfif" && compChoice.getAttribute("src") === "slike/ze.png":
                compRez++
                resultField.innerHTML = "poraz"
                resultField.style.color = "red"

                break

            case myChoice.getAttribute("src") === "slike/kamen.jfif" && compChoice.getAttribute("src") === "slike/papir.jfif":
                compRez++
                resultField.innerHTML = "poraz"
                resultField.style.color = "red"


                break

            case myChoice.getAttribute("src") === "slike/ze.png" && compChoice.getAttribute("src") === "slike/kamen.jfif":
                compRez++
                resultField.innerHTML = "poraz"
                resultField.style.color = "red"


                break

            case myChoice.getAttribute("src") === compChoice.getAttribute("src"):
                resultField.innerHTML = "nereseno"
                resultField.style.color = "gray"

                break
            default:
                mojRez++
                resultField.innerHTML = "pobeda"
                resultField.style.color = "green"
        }
        console.log(izbor)
        izbori.forEach(izbor => {

            izbor.disabled = true;
        });
        setTimeout(() => {
            racunar.innerHTML = compRez
            ti.innerHTML = mojRez
            if (mojRez === 3 || compRez === 3) {
                mojRez = 0
                compRez = 0
                singlePlayerMode.style.display = "none"
                afterGame.style.display = "block"


            }
            izbori.forEach(izbor => {

                izbor.disabled = false;
            });

        }, 3000)


    })
})
single.addEventListener("click", () => {
    singlePlayerMode.style.display = "block"
    /*   afterGame.style.display = "none" */

})
again.addEventListener("click", () => {
    singlePlayerMode.style.display = "block"
    afterGame.style.display = "none"
    racunar.innerHTML = compRez
    ti.innerHTML = mojRez

})
exit.addEventListener("click", () => {
    pocetni.style.display = "block"
    afterGame.style.display = "none"
})

