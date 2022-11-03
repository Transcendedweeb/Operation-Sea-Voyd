let snd_door = new Audio("sounds/door_open.m4a");
let sound_hit = new Audio("sounds/shot_hit.m4a");

let scene = 1
flowHandler = (event_counter) => {
    scene = scene+event_counter

    if(scene === 2){
        document.getElementById("js--scene1").style.display = "none"
        document.getElementById("js--scene2").style.display = "block"
        snd_door.play();
        
        let fade_out = setInterval ( () =>{
            flowHandler(1)
            clearInterval(fade_out)
        }, 2500)
    }

    if(scene === 3){
        document.getElementById("js--scene2").style.display = "none"
        document.getElementById("js--scene3").style.display = "block"

        let complete_fader = setInterval ( () =>{
            flowHandler(1)
            clearInterval(complete_fader)
        }, 8000)
    }

    if(scene === 4){
        document.getElementById("js--scene3").style.display = "none"
        document.getElementById("js--scene4").style.display = "block"
    }

    if(scene === 5){
        document.getElementById("js--scene4").style.display = "none"
        document.getElementById("js--scene5").style.display = "block"
    }

    if(scene === 6){
        document.getElementById("js--scene5").style.display = "none"
        document.getElementById("js--scene6").style.display = "block"
        sound_hit.play()

        let enemy_hit = setInterval ( () =>{
            flowHandler(1)
            clearInterval(enemy_hit)
        }, 2500)
    }

    if(scene === 7){
        document.getElementById("js--scene6").style.display = "none"
        document.getElementById("js--scene7").style.display = "block"
    }

    if(scene === 8){
        document.getElementById("js--text_block_2").innerHTML = "I need a plan if I want to survive this. 25 against 1, should be "+
                                                                "easy enough for me to handle. I can’t get hit, it "+
                                                                "might slow the mission down and every second counts (-5 seconds)."
    }

    if(scene === 9){
        window.location.href = "shoot-out.html"
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