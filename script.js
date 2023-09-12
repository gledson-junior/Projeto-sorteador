function generateNumber() {
   

    const min = Math.ceil(document.querySelector(".input-entre").value)
    const max = Math.floor(document.querySelector(".input-E").value)

    const result = Math.floor(Math.random() * (max - min +1)) + min;
    
    alert(result)

    console.log(min, max)
}

