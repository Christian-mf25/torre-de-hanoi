const criaJogo = () =>{

    let t1 = document.getElementById("t1")
   
    for(let i = 1; i <= 4; i++){
        let disco = i
        let novoDisco = document.createElement("div") 
        t1.appendChild(novoDisco)

        disco === 1 ? novoDisco.classList.add("d1") : (disco === 2 ? novoDisco.classList.add("d2") : (disco === 3 ? novoDisco.classList.add("d3") : novoDisco.classList.add("d4")))
    }
    
}
criaJogo()