/*  teste   */

let t1 = document.getElementById("t1")
let t2 = document.getElementById("t2")
let t3 = document.getElementById("t3")


// armazenar a largura do disco 
// condição para se o disco armazenado é menor que o disco da torre
// se for menor adiciona na torre se for maior não alterar o valor 

// cada torre é um array contendo as divs(blocos)
// funcao que transfere de um para outro


let disco
let dataDisco

let lastT1 = 0
let lastT2 = 0
let lastT3 = 0

const valorDisco = (primeiro, torre, valorTorre, dataDisco) =>{

    if(disco === undefined){
        primeiro.remove()
        disco = primeiro
        // dataDisco = Number(primeiro.dataset.disco)
    }
    else if(disco !== undefined && valorTorre > dataDisco || valorTorre === 0){
        torre.prepend(disco)
        disco = undefined
        valorTorre = 0
    }
}

const zeraTorre = () =>{



}

const pegaUltimo = () =>{

    if(t1.firstElementChild !== null){
        lastT1 = t1.firstElementChild.dataset.disco
    }
    if(t1.firstElementChild === null){
        lastT1 = 0
    }

    if(t2.firstElementChild !== null){
        lastT2 = t2.firstElementChild.dataset.disco
    }
    if(t2.firstElementChild === null){
        lastT2 = 0
    }

    if(t3.firstElementChild !== null){
        lastT3 = t3.firstElementChild.dataset.disco
    }
    if(t3.firstElementChild === null){
        lastT3 = 0
    }
}


const compara = (dataDisco, ) =>{
    
    if(dataDisco < atual){

    }

}

t1.addEventListener("click", function(){
        
    let primeiro = t1.firstElementChild
    let torre = t1

    let valorTorre = lastT1

// troca disco de torre
    valorDisco(primeiro, torre, valorTorre, dataDisco)
    
    // define largura ultimo disco outras torres


    pegaUltimo()

/* -------------------------------------------------------- */
    console.log(lastT1, lastT2, lastT3, valorTorre)

    if(primeiro !== null){
        dataDisco = Number(primeiro.dataset.disco)
    }
    

})


t2.addEventListener("click", function(){

    let primeiro = t2.firstElementChild
    let torre = t2
    let valorTorre = lastT2

    valorDisco(primeiro, torre, valorTorre, dataDisco)
    
    pegaUltimo()



    /* _____________________________________________ */
    console.log(lastT1, lastT2, lastT3, valorTorre)

    if(primeiro !== null){
        dataDisco = Number(primeiro.dataset.disco)
    }
    

})


t3.addEventListener("click", function(){

    let primeiro = t3.firstElementChild
    let torre = t3
    let valorTorre = Number(lastT3)

    valorDisco(primeiro, torre, valorTorre, dataDisco)

    pegaUltimo()


    /* ------------------------------------------------------ */
    console.log(lastT1, lastT2, lastT3, valorTorre)

    if(primeiro !== null){
        dataDisco = Number(primeiro.dataset.disco)
    }
    
    
})