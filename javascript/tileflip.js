let tiles = ["", "", "", "", "", "", "", "", "",]
let music_bg = new Audio("music/tileflipper.m4a");

music_bg.loop = true;
music_bg.play();

const main = () => {
    let computerscreen = document.getElementById("computerscreen")
    let i = 0

    tiles.forEach(flip => {
        i++
        let button_element = document.createElement("button")
        button_element.innerHTML = flip
        button_element.classList.add("button")
        button_element.classList.add("odd")
        button_element.setAttribute("id", "button" + i)
        button_element.setAttribute("onclick", "buttonclick" + i + "()")

        computerscreen.appendChild(button_element)
        document.getElementById("submitbtn").disabled = true;
    });

    //Timer handler staat hier want we kunnen geen dubbele onload op window zetten
    //De rest staat onderaan
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

window.onload = main

buttonclick1 = () => {
    let button1 = document.getElementById("button1")
    let button2 = document.getElementById("button2")
    let button3 = document.getElementById("button3")
    let button4 = document.getElementById("button4")
    let button5 = document.getElementById("button5")
    let button6 = document.getElementById("button6")
    let button7 = document.getElementById("button7")
    let button8 = document.getElementById("button8")
    let button9 = document.getElementById("button9")
    if (button1.classList.contains("odd")) {
        button1.classList.remove("odd")
        button1.classList.add("even")
    } else {
        button1.classList.remove("even")
        button1.classList.add("odd")
    }
    if (button2.classList.contains("odd")) {
        button2.classList.remove("odd")
        button2.classList.add("even")
    } else {
        button2.classList.remove("even")
        button2.classList.add("odd")
    }
    if (button4.classList.contains("odd")) {
        button4.classList.remove("odd")
        button4.classList.add("even")

    } else {
        button4.classList.remove("even")
        button4.classList.add("odd")
    }
    
}

buttonclick2 = () => {
    let button1 = document.getElementById("button1")
    let button2 = document.getElementById("button2")
    let button3 = document.getElementById("button3")
    let button4 = document.getElementById("button4")
    let button5 = document.getElementById("button5")
    let button6 = document.getElementById("button6")
    let button7 = document.getElementById("button7")
    let button8 = document.getElementById("button8")
    let button9 = document.getElementById("button9")
    if (button1.classList.contains("odd")) {
        button1.classList.remove("odd")
        button1.classList.add("even")
    } else {
        button1.classList.remove("even")
        button1.classList.add("odd")
    }
    if (button2.classList.contains("odd")) {
        button2.classList.remove("odd")
        button2.classList.add("even")
    } else {
        button2.classList.remove("even")
        button2.classList.add("odd")
    }
    if (button3.classList.contains("odd")) {
        button3.classList.remove("odd")
        button3.classList.add("even")
    } else {
        button3.classList.remove("even")
        button3.classList.add("odd")
    }
    if (button5.classList.contains("odd")) {
        button5.classList.remove("odd")
        button5.classList.add("even")
    } else {
        button5.classList.remove("even")
        button5.classList.add("odd")
    }
}

buttonclick3 = () => {
    let button1 = document.getElementById("button1")
    let button2 = document.getElementById("button2")
    let button3 = document.getElementById("button3")
    let button4 = document.getElementById("button4")
    let button5 = document.getElementById("button5")
    let button6 = document.getElementById("button6")
    let button7 = document.getElementById("button7")
    let button8 = document.getElementById("button8")
    let button9 = document.getElementById("button9")
    if (button2.classList.contains("odd")) {
        button2.classList.remove("odd")
        button2.classList.add("even")
    } else {
        button2.classList.remove("even")
        button2.classList.add("odd")
    }
    if (button3.classList.contains("odd")) {
        button3.classList.remove("odd")
        button3.classList.add("even")
    } else {
        button3.classList.remove("even")
        button3.classList.add("odd")
    }
    if (button6.classList.contains("odd")) {
        button6.classList.remove("odd")
        button6.classList.add("even")
    } else {
        button6.classList.remove("even")
        button6.classList.add("odd")
    }
}

buttonclick4 = () => {
    let button1 = document.getElementById("button1")
    let button2 = document.getElementById("button2")
    let button3 = document.getElementById("button3")
    let button4 = document.getElementById("button4")
    let button5 = document.getElementById("button5")
    let button6 = document.getElementById("button6")
    let button7 = document.getElementById("button7")
    let button8 = document.getElementById("button8")
    let button9 = document.getElementById("button9")
    if (button1.classList.contains("odd")) {
        button1.classList.remove("odd")
        button1.classList.add("even")
    } else {
        button1.classList.remove("even")
        button1.classList.add("odd")
    }
    if (button4.classList.contains("odd")) {
        button4.classList.remove("odd")
        button4.classList.add("even")
    } else {
        button4.classList.remove("even")
        button4.classList.add("odd")
    }
    if (button5.classList.contains("odd")) {
        button5.classList.remove("odd")
        button5.classList.add("even")
    } else {
        button5.classList.remove("even")
        button5.classList.add("odd")
    }
    if (button7.classList.contains("odd")) {
        button7.classList.remove("odd")
        button7.classList.add("even")
    } else {
        button7.classList.remove("even")
        button7.classList.add("odd")
    }
}

buttonclick5 = () => {
    let button1 = document.getElementById("button1")
    let button2 = document.getElementById("button2")
    let button3 = document.getElementById("button3")
    let button4 = document.getElementById("button4")
    let button5 = document.getElementById("button5")
    let button6 = document.getElementById("button6")
    let button7 = document.getElementById("button7")
    let button8 = document.getElementById("button8")
    let button9 = document.getElementById("button9")
    if (button2.classList.contains("odd")) {
        button2.classList.remove("odd")
        button2.classList.add("even")
    } else {
        button2.classList.remove("even")
        button2.classList.add("odd")
    }
    if (button4.classList.contains("odd")) {
        button4.classList.remove("odd")
        button4.classList.add("even")
    } else {
        button4.classList.remove("even")
        button4.classList.add("odd")
    }
    if (button5.classList.contains("odd")) {
        button5.classList.remove("odd")
        button5.classList.add("even")
    } else {
        button5.classList.remove("even")
        button5.classList.add("odd")
    }
    if (button6.classList.contains("odd")) {
        button6.classList.remove("odd")
        button6.classList.add("even")
    } else {
        button6.classList.remove("even")
        button6.classList.add("odd")
    }
    if (button8.classList.contains("odd")) {
        button8.classList.remove("odd")
        button8.classList.add("even")
    } else {
        button8.classList.remove("even")
        button8.classList.add("odd")
    }
}

buttonclick6 = () => {
    let button1 = document.getElementById("button1")
    let button2 = document.getElementById("button2")
    let button3 = document.getElementById("button3")
    let button4 = document.getElementById("button4")
    let button5 = document.getElementById("button5")
    let button6 = document.getElementById("button6")
    let button7 = document.getElementById("button7")
    let button8 = document.getElementById("button8")
    let button9 = document.getElementById("button9")
    if (button3.classList.contains("odd")) {
        button3.classList.remove("odd")
        button3.classList.add("even")
    } else {
        button3.classList.remove("even")
        button3.classList.add("odd")
    }
    if (button5.classList.contains("odd")) {
        button5.classList.remove("odd")
        button5.classList.add("even")
    } else {
        button5.classList.remove("even")
        button5.classList.add("odd")
    }
    if (button6.classList.contains("odd")) {
        button6.classList.remove("odd")
        button6.classList.add("even")
    } else {
        button6.classList.remove("even")
        button6.classList.add("odd")
    }
    if (button9.classList.contains("odd")) {
        button9.classList.remove("odd")
        button9.classList.add("even")
    } else {
        button9.classList.remove("even")
        button9.classList.add("odd")
    }
}

buttonclick7 = () => {
    let button1 = document.getElementById("button1")
    let button2 = document.getElementById("button2")
    let button3 = document.getElementById("button3")
    let button4 = document.getElementById("button4")
    let button5 = document.getElementById("button5")
    let button6 = document.getElementById("button6")
    let button7 = document.getElementById("button7")
    let button8 = document.getElementById("button8")
    let button9 = document.getElementById("button9")
    if (button4.classList.contains("odd")) {
        button4.classList.remove("odd")
        button4.classList.add("even")
    } else {
        button4.classList.remove("even")
        button4.classList.add("odd")
    }
    if (button7.classList.contains("odd")) {
        button7.classList.remove("odd")
        button7.classList.add("even")
    } else {
        button7.classList.remove("even")
        button7.classList.add("odd")
    }
    if (button8.classList.contains("odd")) {
        button8.classList.remove("odd")
        button8.classList.add("even")
    } else {
        button8.classList.remove("even")
        button8.classList.add("odd")
    }
}

buttonclick8 = () => {
    let button1 = document.getElementById("button1")
    let button2 = document.getElementById("button2")
    let button3 = document.getElementById("button3")
    let button4 = document.getElementById("button4")
    let button5 = document.getElementById("button5")
    let button6 = document.getElementById("button6")
    let button7 = document.getElementById("button7")
    let button8 = document.getElementById("button8")
    let button9 = document.getElementById("button9")
    if (button5.classList.contains("odd")) {
        button5.classList.remove("odd")
        button5.classList.add("even")
    } else {
        button5.classList.remove("even")
        button5.classList.add("odd")
    }
    if (button7.classList.contains("odd")) {
        button7.classList.remove("odd")
        button7.classList.add("even")
    } else {
        button7.classList.remove("even")
        button7.classList.add("odd")
    }
    if (button8.classList.contains("odd")) {
        button8.classList.remove("odd")
        button8.classList.add("even")
    } else {
        button8.classList.remove("even")
        button8.classList.add("odd")
    }
    if (button9.classList.contains("odd")) {
        button9.classList.remove("odd")
        button9.classList.add("even")
    } else {
        button9.classList.remove("even")
        button9.classList.add("odd")
    }
}

buttonclick9 = () => {
    let button1 = document.getElementById("button1")
    let button2 = document.getElementById("button2")
    let button3 = document.getElementById("button3")
    let button4 = document.getElementById("button4")
    let button5 = document.getElementById("button5")
    let button6 = document.getElementById("button6")
    let button7 = document.getElementById("button7")
    let button8 = document.getElementById("button8")
    let button9 = document.getElementById("button9")
    if (button6.classList.contains("odd")) {
        button6.classList.remove("odd")
        button6.classList.add("even")
    } else {
        button6.classList.remove("even")
        button6.classList.add("odd")
    }
    if (button8.classList.contains("odd")) {
        button8.classList.remove("odd")
        button8.classList.add("even")
    } else {
        button8.classList.remove("even")
        button8.classList.add("odd")
    }
    if (button9.classList.contains("odd")) {
        button9.classList.remove("odd")
        button9.classList.add("even")
    } else {
        button9.classList.remove("even")
        button9.classList.add("odd")
    }
}

gamecheck = () => {
    let button1 = document.getElementById("button1")
    let button2 = document.getElementById("button2")
    let button3 = document.getElementById("button3")
    let button4 = document.getElementById("button4")
    let button5 = document.getElementById("button5")
    let button6 = document.getElementById("button6")
    let button7 = document.getElementById("button7")
    let button8 = document.getElementById("button8")
    let button9 = document.getElementById("button9")
    if (button1.classList.contains("even") && button2.classList.contains("even") && button3.classList.contains("even") && button4.classList.contains("even") && button5.classList.contains("even") && button6.classList.contains("even") && button7.classList.contains("even") && button8.classList.contains("even") && button9.classList.contains("even")) {
        document.getElementById("submitbtn").disabled = false;
    } else {
        console.log("not everything is green")
    }
}

victory = () => {
    pauseTime()
    localStorage.clear();
    window.location.href = "ending.html"
}

sceneHandler = (scene) =>{
    if(scene === 1){
        document.getElementById("js--btn").style.display = "flex"
        document.getElementById("js--pc").style.display = "flex"
        document.getElementById("js--scene2").style.display = "none"
    }

    else if(scene === 2){
        document.getElementById("js--btn").style.display = "none"
        document.getElementById("js--pc").style.display = "none"
        document.getElementById("js--scene2").style.display = "block"
    }
}

// code voor de timer (kan je kopieren en plakken)
if (localStorage.getItem('time') == null) {
    var time_array = [10, 0, 0]

    console.log(time_array[0]+":"+time_array[1]+time_array[2])

} else {
    time_array = JSON.parse(localStorage.getItem('time'));
}

pauseTime = () =>{
    clearTimeout(countdownInterval)
}
// ---------------------------------------------------------------------------------------------------------------