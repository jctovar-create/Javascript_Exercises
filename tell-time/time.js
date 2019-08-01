document.addEventListener('DOMContentLoaded', function(){
    var time = document.getElementById("clockText");
    var date = document.getElementById('date');
    var d = new Date();
    
    setInterval(updateTime, 1000);

    function updateTime(){
        var d = new Date(),
            ampm = "AM",
            minutes = d.getMinutes(),
            seconds = d.getSeconds();
            month = monthNames[d.getMonth()];
    
    // function formatMonth(m){
    //     m = parseInt(m, 10);
    //     if(m < 0){
    //         m = 0;
    //     } else if (m > 11){
    //         m = 11;
    //     }
    // }
        
    var hours = d.getHours();
    if (hours > 12){
        hours -= 12;
        ampm = "PM";
    } else if (hours = 12) {
        ampm = "PM";
    } else if (hours = 0){
        hours = 12;
        ampm = "AM";
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }

        time.innerHTML = hours + ":" + minutes + ":" + seconds + " " + ampm;
        date.textContent =  month + " " + d.getDate() + ", " + d.getUTCFullYear();
    }

    var monthNames = [
        'January', 'February', 'March', "April", 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    // return monthNames[m];
});

