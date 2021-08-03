let t1 = document.getElementById("t1")
let t2 = document.getElementById("t2")
let t3 = document.getElementById("t3")


// armazenar a largura do disco 
// condição para se o disco armazenado é menor que o disco da torre
// se for menor adiciona na torre se for maior não alterar o valor 


let disco
let larguraDisco 
let larguraT1 = 0
let larguraT2 = 0
let larguraT3 = 0

// if(t1.firstElementChild === null){
//     larguraT1 = 1
// }else{
//     larguraT1 = t1.firstElementChild.clientWidth
// }


// if(t2.firstElementChild === null){
//     larguraT2 = 2
// }else{
//     larguraT2 = t2.firstElementChild.clientWidth
// }


// if(t3.firstElementChild === null){
//     larguraT3 = 3
// }else{
//     larguraT3 = t3.firstElementChild.clientWidth
// }

// const valorDisco = (primeiro, torre) =>{

    
//     if(disco === undefined){
//         primeiro.remove()
//         disco = primeiro
//     }else{
//         torre.appendChild(disco)
//         disco = undefined
//         console.log(larguraT1, larguraT2, larguraT3)
//     }

// }

t1.addEventListener("click", function(){
        
    let primeiro = t1.firstElementChild
    let largura = primeiro.clientWidth
    let torre = t1


    if(primeiro === null){
        larguraT1 = 1
    }else{
        larguraT1 = primeiro.clientWidth
    }



    // valorDisco(primeiro, torre)
    
    if(disco === undefined){
        larguraDisco = largura
        primeiro.remove()
        disco = primeiro
        

    }else{
        t1.appendChild(disco)
        disco = undefined


        if(primeiro !== null){
            larguraT1 = primeiro.clientWidth
        }
        console.log(larguraT1, larguraT2, larguraT3)
    }
    
    

})

t2.addEventListener("click", function(){

    let primeiro = t2.firstElementChild
    let torre = t2

    // valorDisco(primeiro, torre)


    if(primeiro !== null){
        larguraT2 = primeiro.clientWidth
        console.log(larguraT2 )
    }




    if(disco === undefined){
        primeiro.remove()
        disco = primeiro
    }else{
        t2.appendChild(disco)
        disco = undefined


 
    }




})

t3.addEventListener("click", function(){


    let primeiro = t3.firstElementChild
    let torre = t3

    // valorDisco(primeiro, torre)


    if(primeiro !== null){
        larguraT3 = primeiro.clientWidth
        console.log(larguraT3)
    }




    if(disco === undefined){
        primeiro.remove()
        disco = primeiro
    }else{
        t3.appendChild(disco)
        disco = undefined


        
    }

    
})


// console.log(larguraT1, larguraT2, larguraT3)