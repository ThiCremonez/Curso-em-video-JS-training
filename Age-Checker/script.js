function ver() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    if (fyear.value.length == 0 || Number(fyear.value) > ano){
        window.alert("[ERROR] Check data and try again!")
    } else{
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        var gener = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (fsex[0].checked) {
            gener = 'Man'
            if (idade >=0 && idade < 10){
                // Male baby
                img.setAttribute('src', 'photo-baby-m.png')
            } else if (idade >= 10 && idade < 21) {
                // Male teen
                img.setAttribute('src', 'photo-teen-m.png')
            }    } else if (idade >= 21 && idade < 50) {
                // Male adult
                img.setAttribute('src', 'photo-adult-m.png')
            } else {
                // Male old
                img.setAttribute('src', 'photo-old-m.png')
            }

        } else if (fsex[1].checked) {
            gener = 'Woman'
            if (idade >=0 && idade < 10){
                // Female baby
                img.setAttribute('src', 'photo-baby-f.png')
            } else if (idade >= 10 && idade < 21) {
                // Female Teen
                img.setAttribute('src', 'photo-tten-f.png')
            }    } else if (idade >= 21 && idade < 50) {
                // Female adult
                img.setAttribute('src', 'photo-adult-f.png')
            } else {
                // Female old
                img.setAttribute('src', 'photo-old-f.png')
            }
        }
        res.style.textAlign = 'center'     
        res.innerHTML = `Detected ${gener}, ${age} years old`
        res.appendChild(img)
    }

}
