let num = document.querySelector('input#fnum')
let res = document.querySelector('div#res')
let list = document.querySelector('select#flist')
let vl = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function add() {
    if(isNumber(num.value) && !inList(num.value, vl)){
        vl.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Value ${num.value} added`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Invalid Number or already in list.')
    }
    num.value = ''
    num.focus()
}

function analizer(){
    if (vl.length == 0){
        window.alert("Add values before finish")
    } else {
        let tot = vl.length
        let max = Math.max.apply(null, vl)
        let min = Math.min.apply(null, vl)
        let sum = 0
        let mean = 0
        for (let pos in vl){
            sum += vl[pos]
        }
        mean = sum / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos <strong>${tot}</strong> numeros cadastrados.<br>
                                O maior número é <strong>${max}</strong>.<br>
                                O menor número é <strong>${min}</strong>.<br>
                                A média dos valorers é <strong>${mean.toFixed(2)}</strong>.<br>
                                A soma dos valores é <strong>${sum}</strong>.<br></p>`
    }
    
}