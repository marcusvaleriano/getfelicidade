function getFelicidade(realidade, expectativa){
    return realidade-expectativa === 1 ? 'feliz' : 'triste'/* ? e : é um ternario*/
 }
 console.log(getFelicidade(1, 2))