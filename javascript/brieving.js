let loc_counter = 0;
let tot_text_counter = 0;

brieving_intro = () =>{
    let locScene = document.getElementById("js--locScene")
    let brievingScene = document.getElementById("js--brievingScene")

    let fadeEffect = setInterval( () => {
        if (!locScene.style.opacity) {
            locScene.style.opacity = 1;
        }
        if (locScene.style.opacity > 0) {
            locScene.style.opacity -= 0.05;
        } else {
            clearInterval(fadeEffect);
        }
    }, 100);

    let brieving_intro_handler = setInterval ( () => {
        locScene.style.display = "none"
        brievingScene.style.display = "block"
        clearInterval(brieving_intro_handler)
    }, 3000)
}

let locAnimation_handler = setInterval( () => {
    loc_counter = loc_counter+1

    console.log(loc_counter)
    if(loc_counter === 4){
        brieving_intro();
        clearInterval(locAnimation_handler)
    }else if(loc_counter === 1){
        let counted1 = document.getElementById("js--locP2")
        counted1.style.display = "block"
        counted1.classList.add("locAnimation")
    }else if(loc_counter === 2){
        let counted2 = document.getElementById("js--locP3")
        counted2.style.display = "block"
        counted2.classList.add("locAnimation")
    }else if(loc_counter === 3){
        let counted3 = document.getElementById("js--locP4")
        counted3.style.display = "block"
        counted3.classList.add("locAnimation")
    }
}, 2900)

endBrieving = () => {
    let brieving = document.getElementById("js--brievingScene")
    let text_brieving = document.getElementById("js--brievingTextScene")

    brieving.style.display = "none"
    text_brieving.style.display = "block"
}

brieving_text1 = (event_counter) => {
    tot_text_counter = tot_text_counter+event_counter;

    if(tot_text_counter === 1){
        document.getElementById("js--brievingTextScene").style.display = "none"
        document.getElementById("js--gas_scene").style.display = "block"
    }else if(tot_text_counter === 2){
        document.getElementById("js--brievingTextScene").style.display = "block"
        document.getElementById("js--gas_scene").style.display = "none"

        document.getElementById("js--brieving_text_1").innerHTML = "I need to find my way to the main computer to stop the missiles from launching. According "+
                                                                    "to my intel it’s In the central room of this submarine. I have to be careful and efficient for "+
                                                                    "this to happen. Time is short so let's get the move on!"
    }else if(tot_text_counter === 3){
        runTime()
        document.getElementById("js--brievingTextScene").style.display = "none"
        document.getElementById("js--move_vent_scene").style.display = "block"
    }else if(tot_text_counter === 4){
        document.getElementById("js--move_vent_scene").style.display = "none"
        document.getElementById("js--door_vent_scene").style.display = "block"
        
    }else if(tot_text_counter === 5){
        pauseTime()
        document.getElementById("js--door_vent_scene").style.display = "none"
        document.getElementById("js--infoRoom_reactor").style.display = "block"

        setInterval( () => {
            window.location.href = "reactor.html"
        }, 7900)
    }

    console.log(tot_text_counter)
}


// code voor de timer (kan je kopieren en plakken)
if (localStorage.getItem('time') == null) {
    var time_array = [10, 0, 0]

    console.log(time_array[0]+":"+time_array[1]+time_array[2])

} else {
    time_array = JSON.parse(localStorage.getItem('time'));
}

runTime = () =>{
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

pauseTime = () =>{
    clearTimeout(countdownInterval)
}
// ---------------------------------------------------------------------------------------------------------------