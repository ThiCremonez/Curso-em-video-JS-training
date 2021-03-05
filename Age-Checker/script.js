function verify() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        window.alert("[ERROR] Check data and try again!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        var gener = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (fsex[0].checked) {
            gener = 'Man'
            if (age >=0 && age < 10){
                // Male baby
                img.setAttribute('src', 'photo-baby-m.png')
            } else if (age >= 10 && age < 21) {
                // Male teen
                img.setAttribute('src', 'photo-teen-m.png')
            } else if (age >= 21 && age < 50) {
                // Male adult
                img.setAttribute('src', 'photo-adult-m.png')
            } else {
                // Male old
                img.setAttribute('src', 'photo-old-m.png')
            }
        } else if (fsex[1].checked) {
            gener = 'Woman'
            if (age >=0 && age < 10) {
                // Female baby
                img.setAttribute('src', 'photo-baby-f.png')
            } else if (age >= 10 && age < 21) {
                // Female Teen
                img.setAttribute('src', 'photo-teen-f.png')
            } else if (age >= 21 && age < 50) {
                // Female adult
                img.setAttribute('src', 'photo-adult-f.png')
            } else {
                // Female old
                img.setAttribute('src', 'photo-old-f.png')
                }
            }
        }
        res.style.textAlign = 'center'     
        data3.innerHTML = `Detected ${gener}, ${age} years old`
        res.appendChild(img)
    }

