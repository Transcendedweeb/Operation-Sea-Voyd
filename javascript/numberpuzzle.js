let beep = new Audio("sounds/beep.m4a");
let music_bg = new Audio("music/numbers.m4a");

music_bg.loop = true;
music_bg.play();

checkvalues = () => {
    let box1value = parseInt(document.getElementById("box1").value);
    let box2value = parseInt(document.getElementById("box2").value);
    let box3value = parseInt(document.getElementById("box3").value);
    let box4value = parseInt(document.getElementById("box4").value);
    let box5value = parseInt(document.getElementById("box5").value);
    let box6value = parseInt(document.getElementById("box6").value);
    let box7value = parseInt(document.getElementById("box7").value);
    let box8value = parseInt(document.getElementById("box8").value);
    let box9value = parseInt(document.getElementById("box9").value);

    let array = [box1value, box2value, box3value, box4value, box5value, box6value, box7value, box8value, box9value]
    let gezien = []
    let uniek = "true"
    let tussen = "true"
    for (let i = 0; i< array.length; i++){
        console.log(array[i])
        let value = array[i]
        if (gezien.indexOf(value) !== -1){
            uniek = "false"
        } gezien.push(value)
    } 

    console.log(gezien)

    for (let i = 0; i< array.length; i++){
        console.log(array[i])
        if(array[i] > 9 || array[i] < 1){
            tussen = "false"
            console.log("test")
        }
    }

    if (uniek == "true" && tussen == "true") {
            if(box1value + box2value + box3value === 15 && box4value + box5value + box6value === 15 && box7value + box8value + box9value === 15){
                console.log("klopt")
                document.getElementById("verder").disabled = false;
            }
            else{
                console.log("fout")
            }
    } 
    else{
        console.log("nietuniek")
    }

}

sceneHandler = (event_counter) => {
    if(event_counter === 2){
        document.getElementById("js--scene1").style.display = "none"
        document.getElementById("js--scene2").style.display = "block"
    }

    else if(event_counter === 1){
        document.getElementById("js--scene2").style.display = "none"
        document.getElementById("js--scene1").style.display = "block"
    }
}

nextChapter = () => {
    beep.play()
    
    let end = setInterval ( () =>{
        pauseTime()
        window.location.href = "central.html"
        clearInterval(end)
    }, 1000)
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