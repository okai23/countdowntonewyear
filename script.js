(function () {
     const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24
     
     let new_year = "Jan 1, 2024 00:00:00"
          countDown = new Date(new_year).getTime(),
          x = setInterval(function () {

               let now = new Date().getTime(),
                    distance = countDown - now;

               document.getElementById("days").innerText = Math.floor((distance / 1000) / 86400),
                    document.getElementById("hours").innerText = Math.floor((distance % day) / hour),
                    document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute),
                    document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);
               
               if(distance < 0) {
                    let headline = document.getElementById("headline"),
                         countdown = document.getElementById("countdown"),
                         content = document.getElementById("content");
                    
                    headline.innerText = "Happy New Year!";
                    countdown.style.display = "none";
                    content.style.display = "block";

                    clearInterval(x)
               }
          }, 0)
}())