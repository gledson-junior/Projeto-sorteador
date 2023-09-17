function generateNumber() {


    const min = Math.ceil(document.querySelector(".input-entre").value)
    const max = Math.floor(document.querySelector(".input-E").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;



    if (max > min) {
        alert(result)
    } else {
        alert("O valor MÍNIMO não pode ser maior que o MAXIMO")

    }
}

