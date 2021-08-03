let t1 = document.getElementById("t1")
let t2 = document.getElementById("t2")
let t3 = document.getElementById("t3")


let data1 = document.getElementById('d1')
let dataLargura1 = Number(data1.dataset.disco)

let data2 = document.getElementById('d2')
let dataLargura2 = Number(data2.dataset.disco)

let data3 = document.getElementById('d3')
let dataLargura3 = Number(data3.dataset.disco)

let data4 = document.getElementById('d4')
let dataLargura4 = Number(data4.dataset.disco)


let arrLargura = [
        dataLargura1, 
        dataLargura2, 
        dataLargura3, 
        dataLargura4
    ]

console.log(arrLargura)




// armazenar a largura do disco 
// condição para se o disco armazenado é menor que o disco da torre
// se for menor adiciona na torre se for maior não alterar o valor 

// cada torre é um array contendo as divs(blocos)
// funcao que transfere de um para outro


let disco
let dataDisco
let larguraDisco 


const valorDisco = (primeiro, torre) =>{

    
    if(disco === undefined){
        primeiro.remove()
        disco = primeiro
    }
    // else{
    //     torre.appendChild(disco)
    //     disco = undefined
    // }

}

const compara = (dataDisco, atual) =>{
    
    if(dataDisco < atual){
        torre.appendChild(disco)
        disco = undefined
    }

}

t1.addEventListener("click", function(){
        
    let primeiro = t1.firstElementChild
    let torre = t1

    let dataDisco = Number(primeiro.dataset.disco)
    console.log(dataDisco)


    valorDisco(primeiro, torre)
    
    
    

})

t2.addEventListener("click", function(){

    let primeiro = t2.firstElementChild
    let torre = t2

    // let atual = Number(primeiro.dataset.disco)


    valorDisco(primeiro, torre)






})

t3.addEventListener("click", function(){


    let primeiro = t3.firstElementChild
    let torre = t3

    // let atual = Number(primeiro.dataset.disco)


    valorDisco(primeiro, torre)


    
})


// console.log(larguraT1, larguraT2, larguraT3)