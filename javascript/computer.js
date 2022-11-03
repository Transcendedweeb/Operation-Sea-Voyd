let boot = new Audio("sounds/boot.m4a");

let scene = 1
flowHandler = (event_counter) => {
    scene = scene+event_counter

    if(scene === 2){
        runTime()
        document.getElementById("js--scene1").style.display = "none"
        document.getElementById("js--scene2").style.display = "block"
    }
    else if(scene === 3){
        document.getElementById("js--scene2").style.display = "none"
        document.getElementById("js--scene3").style.display = "block"

        let move1 = setInterval ( () =>{
            flowHandler(1)
            clearInterval(move1)
        }, 1500)
    }

    else if(scene === 4){
        pauseTime()
        document.getElementById("js--scene3").style.display = "none"
        document.getElementById("js--scene4").style.display = "block"
    }

    else if(scene === 5){
        runTime()
        document.getElementById("js--scene4").style.display = "none"
        document.getElementById("js--scene5").style.display = "block"
        boot.play()
        
        let move2 = setInterval ( () =>{
            flowHandler(1)
            clearInterval(move2)
        }, 5000)
    }

    else if(scene === 6){
        pauseTime()
        document.getElementById("js--scene5").style.display = "none"
        document.getElementById("js--scene6").style.display = "block"
    }

    else if(scene === 7){
        window.location.href = "tileflip.html"
    }
}


// code voor de timer (kan je kopieren en plakken)
if (localStorage.getItem('time') == null) {
    var time_array = [10, 0, 0]

    console.log(time_array[0]+":"+time_array[1]+time_array[2])

} else {
    time_array = JSON.parse(localStorage.getItem('time'));
}

runTime = () => {
    let timer_text = document.querySelectorAll("[data-js='timer']");

    countdownInterval = setInterval(() => {
        if((time_array[2] == 0) && (time_array[1] == 0) && (time_array[0] == 0)){
            timer_text.forEach(text => text.innerHTML = "0"+time_array[0]+":"+time_array[1]+time_array[2])

            console.log("GAME OVER")
            localStorage.clear();
            clearTimeout(countdownInterval)
            window.location.href = "game_over.html"
        }

        else if(time_array[2] != 0){
            time_array[2] = time_array[2] - 1
            localStorage.setItem('time', JSON.stringify(time_array))

            timer_text.forEach(text => text.innerHTML = "0"+time_array[0]+":"+time_array[1]+time_array[2])
        }
        else if((time_array[2] == 0) && (time_array[1] != 0)){
            time_array[1] = time_array[1] - 1
            time_array[2] = 9
            localStorage.setItem('time', JSON.stringify(time_array))

            timer_text.forEach(text => text.innerHTML = "0"+time_array[0]+":"+time_array[1]+time_array[2])
        }
        else if((time_array[2] == 0) && (time_array[1] == 0)){
            time_array[0] = time_array[0] - 1
            time_array[1] = 5
            time_array[2] = 9
            localStorage.setItem('time', JSON.stringify(time_array))

            timer_text.forEach(text => text.innerHTML = "0"+time_array[0]+":"+time_array[1]+time_array[2])
        }
    }, 1000);
}

pauseTime = () => {
    clearTimeout(countdownInterval)
}
// ---------------------------------------------------------------------------------------------------------------