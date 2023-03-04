const blue = document.querySelectorAll(".blue button")
const red = document.querySelectorAll(".red button")
const blueContestant = document.querySelector(".blueContestant")
const redContestant = document.querySelector(".redContestant")
const whoWon = document.querySelector("h4 span")
const canCannot = document.querySelector(".can-cannot")
const afterGame = document.querySelector(".afterGame")
const again = document.querySelector(".again")
const exit = document.querySelector(".exit")
const multiPlayer = document.querySelector(".multi-player")
const myChoice = document.querySelector(".myChoice img")
const compChoice = document.querySelector(".compChoice img")
let blueColor = false;
let redColor = false;
let blueChose
let redChose
let dozvola = true

blueScore = 0
redScore = 0



window.addEventListener("keydown", (e) => {

    if (e.key === "a" || e.key === "s" || e.key === "d") {
        blueColor = true

    }
    switch (true) {

        case e.key === "a":
            blueChose = "kamen.jfif"

            break
        case e.key === "s":
            blueChose = "papir.jfif"

            break
        case e.key === "d":
            blueChose = "ze.png"

            break;


    }
    if (blueColor && redColor && dozvola) {
        console.log(redChose, blueChose)

        canCannot.innerHTML = "NE MOZE"
        compChoice.setAttribute("src", `slike/${blueChose}`)
        myChoice.setAttribute("src", `slike/${redChose}`)
        dozvola = false
        switch (true) {
            case blueChose === redChose:
                console.log("nereseno")
                whoWon.innerHTML = "remi"
                break
            case blueChose === "kamen.jfif" && redChose === "papir.jfif":
                console.log("crv")
                whoWon.innerHTML = "crveni"
                redScore += 1
                break
            case blueChose === "papir.jfif" && redChose === "ze.png":
                console.log("crv")
                whoWon.innerHTML = "crveni"
                redScore += 1
                break
            case blueChose === "ze.png" && redChose === "kamen.jfif":
                console.log("crv")
                whoWon.innerHTML = "crveni"
                redScore += 1
                break
            default: console.log("plavi pob")
                whoWon.innerHTML = "plavi"
                blueScore += 1



        }
        setTimeout(() => {
            blueContestant.innerHTML = blueScore
            redContestant.innerHTML = redScore
        }, 1000)
        setTimeout(() => {
            dozvola = true
            blueColor = false;
            redColor = false;
            canCannot.innerHTML = " MOZE"
            whoWon.innerHTML += ""
            compChoice.setAttribute("src", "slike/znakpitanja.jfif")
            myChoice.setAttribute("src", "slike/znakpitanja.jfif")
            if (blueScore === 3 || redScore === 3) {
                console.log(blueScore, redScore)


                afterGame.style.display = "block"
                multiPlayer.style.display = "none"
            }

        }, 2000)
    }
})
document.body.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
        redColor = true
    }
    console.log(e.key)

    switch (true) {

        case e.key === "ArrowLeft":
            redChose = "kamen.jfif"
            break
        case e.key === "ArrowDown":
            redChose = "papir.jfif"

            break
        case e.key === "ArrowRight":
            redChose = "ze.png"

            break;

    }
    if (blueColor && redColor && dozvola) {
        canCannot.innerHTML = "NE MOZE"
        console.log(redChose, blueChose)
        compChoice.setAttribute("src", `slike/${blueChose}`)
        myChoice.setAttribute("src", `slike/${redChose}`)

        dozvola = false

        switch (true) {
            case blueChose === redChose:
                console.log("nereseno")
                whoWon.innerHTML = "remi"
                break
            case blueChose === "kamen.jfif" && redChose === "papir.jfif":
                console.log("crv")
                whoWon.innerHTML = "crveni"
                redScore += 1
                break
            case blueChose === "papir.jfif" && redChose === "ze.png":
                console.log("crv")
                whoWon.innerHTML = "crveni"
                redScore += 1
                break
            case blueChose === "ze.png" && redChose === "kamen.jfif":
                console.log("crv")
                whoWon.innerHTML = "crveni"
                redScore += 1
                break
            default: console.log("plavi pob")
                whoWon.innerHTML = "plavi"
                blueScore += 1


        }
        setTimeout(() => {
            blueContestant.innerHTML = blueScore
            redContestant.innerHTML = redScore
        }, 1000)
        setTimeout(() => {
            dozvola = true
            blueColor = false;
            redColor = false;
            canCannot.innerHTML = "MOZE"
            whoWon.innerHTML += ""
            compChoice.setAttribute("src", "slike/znakpitanja.jfif")
            myChoice.setAttribute("src", "slike/znakpitanja.jfif")
            if (blueScore === 3 || redScore === 3) {
                console.log(blueScore, redScore)

                afterGame.style.display = "block"
                multiPlayer.style.display = "none"

            }

        }, 2000)
    }

})
again.addEventListener("click", () => {
    multiPlayer.style.display = "block"
    afterGame.style.display = "none"
    blueScore = 0
    redScore = 0
    blueContestant.innerHTML = blueScore
    redContestant.innerHTML = redScore

})
exit.addEventListener("click", () => {
    window.location.href = "pkm.html"
    afterGame.style.display = "none"
})



