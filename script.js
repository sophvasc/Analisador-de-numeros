    let num = document.getElementById("txtn1")
    let selec = document.getElementById("busc")
    let res = document.getElementById("res2")
    let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100 ){
        return true
    }else {
        return false
    }
}

function inLista (n, l){
    if(l.indexOf(Number(n)) != -1 ){
        return true
    }else {
        return false
    }
}

function Adicionar(){
    if (isNumero(num.value) && ! inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        selec.appendChild(item)
        res2.innerHTML = ""
    }else {
        window.alert("[ERRO]Valor invalido ou já encontrado na lista!")
    }
    num.value = ""
    num.focus()
}

function Finalizar(){
    if(valores.length == 0){
        alert("[ERRO]Adicione um valor na lista para finalizar!")
    }else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }if(valores[pos] < menor) {
                menor = valores[pos]
            }

        }
        media = soma / tot
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo temos ${tot} números registrados.</p>`
        res.innerHTML += `<p>O maior número registrado é ${maior}</p>`
        res.innerHTML += `<p>O menor número registrado é ${menor}</p>`
        res.innerHTML += `<p>A soma dos números registrados é igual à ${soma}</p>`
        res.innerHTML += `<p>A media entre os números registrados é igual à ${media}</p>`
    }
}