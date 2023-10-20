const buttonJoin = document.querySelector(".button-sort")
const finalResult = document.getElementById("result-final")



function generateNumber() {


    const min = Math.ceil(document.querySelector(".input-entre").value)
    const max = Math.floor(document.querySelector(".input-E").value)

    



    if (min >= max) {
        finalResult.innerHTML = "O valor MÍNIMO tem que ser menor que o MÁXIMO"
        
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        finalResult.innerHTML = result

    }
}

buttonJoin.addEventListener("click", generateNumber)