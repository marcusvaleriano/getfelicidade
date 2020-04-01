const getFelicidade = (realidade, expectativa) =>realidade-expectativa === 1 ? 'feliz' : 'triste'/* ? e : é um ternario*/
/* => arrow function*/
console.log(getFelicidade(1, 2))