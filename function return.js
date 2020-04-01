function getFelicidade(realidade, expectativa){
    const felicidade = realidade-expectativa
    if (felicidade === 1){/*= atribuição, == equivalentes, === igual e somente igual a*/
        return 'você é feliz'/*se tiver return n precisa de else*/
    }
    return 'você não é feliz'
}
console.log(getFelicidade(2, 2))