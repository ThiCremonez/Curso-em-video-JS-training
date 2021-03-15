function calc(){
    var nbr = document.getElementById('nbr')
    var tab = document.getElementById('seltable')
    
    var n = Number(nbr.value)
    var c = 1
    tab.innerHTML = ``
    while (c<= 10) {
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }
}