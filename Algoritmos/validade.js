const validar = (dateArg, validade) => {
    let hoje = new Date()
    let data = new Date(dateArg)
 
    let diferencatt = (hoje.getTime() - data.getTime())
    let diferenca = Math.ceil(diferencatt / (1000 * 60 * 60 * 24))
 
    let validardias = validade.slice(0, (validade.length - 1))
 
    if(diferenca > validardias){
       return true
    }else{
       return false
    }
 }
 
 console.log(validar("2021-11-17T20:40:09.503Z", "10d"))