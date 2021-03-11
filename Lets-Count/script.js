function count(){
    var start = document.getElementById('nbr1')
    var end = document.getElementById('nbr2')
    var step = document.getElementById('nbr3')
    var res = document.getElementById('res')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        window.alert("Fill the blanks, please!")
    } else {
        res.innerHTML = "Conting: <br>"
        var s = Number(start.value)
        var e = Number(end.value)
        var st = Number(step.value)
        if (st <= 0) {
            window.alert ("Passo inválido")
            st = ``
        }
        if (s < e) {
            for(var c = s; c <= e; c += st) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(var c = s; c >= e; c -= st) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }   
        res.innerHTML += `\u{1F3C1}`
    }
}
