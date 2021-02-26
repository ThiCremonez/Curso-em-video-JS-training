function load() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('pht')
    var date = new Date() //creates a 'date' variable with the current date and time
    var hour = date.getHours() //creates a 'hour' variable with the time of the 'date' variable
    var ampm = 'AM'

    //change the photo according the time of day
    if (hour >= 0 && hour < 12){
        img.src = 'Morning.png'
        document.body.style.background = '#e2cd9f'
    } else if (hour >= 12 && hour <= 18){
        img.src = 'Afternoon.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'Night.png'
        document.body.style.background = '#515154'
    }

    // changes the time to the standard 12 hours and adds PM if necessary
    if (hour == 13){
        var hour = 1
        var ampm = 'PM'
    } else if (hour == 14){
        var hour = 2
        var ampm = 'PM'
    } else if (hour == 15){
        var hour = 3
        var ampm = 'PM'
    } else if (hour == 16){
        var hour = 4
        var ampm = 'PM'
    } else if (hour == 17){
        var hour = 5
        var ampm = 'PM'
    } else if (hour == 18){
        var hour = 6
        var ampm = 'PM'
    } else if (hour == 19){
        var hour = 7
        var ampm = 'PM'
    } else if (hour == 20){
        var hour = 8
        var ampm = 'PM'
    } else if (hour == 21){
        var hour = 9
        var ampm = 'PM'
    } else if (hour == 22){
        var hour = 10
        var ampm = 'PM'
    } else if (hour == 23){
        var hour = 11
        var ampm = 'PM'
    } else{}


    msg.innerHTML = `It's ${hour} ${ampm}`
        
}