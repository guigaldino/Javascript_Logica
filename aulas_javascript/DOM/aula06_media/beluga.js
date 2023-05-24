function calcularMedia(){
        
    var total = 0
    var qtd = arguments.length     
    
    for(var i = 0; typeof arguments[i] === 'number'; i++){
        total += arguments[i]
    }

    return total / qtd
}