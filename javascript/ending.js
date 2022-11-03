let snd_door = new Audio("sounds/door.m4a");

let scene = 0
flowHandler = (event_counter) => {
    scene = scene + event_counter
    console.log(scene)

    if(scene === 1){
        let move1 = setInterval ( () =>{
            flowHandler(1)
            clearInterval(move1)
        }, 6000)
    }

    if(scene === 2){
        document.getElementById("js--scene1").style.display = "none"
        document.getElementById("js--scene2").style.display = "block"
    }

    if(scene === 3){
        document.getElementById("js--scene2").style.display = "none"
        document.getElementById("js--scene3").style.display = "block"
        document.getElementById("js--scene4").style.display = "none"
    }

    if(scene === 4){
        document.getElementById("js--scene3").style.display = "none"
        document.getElementById("js--scene4").style.display = "block"
    }

    if(scene === 5){
        document.getElementById("js--scene3").style.display = "none"
        document.getElementById("js--scene5").style.display = "block"
        document.getElementById("js--scene7").style.display = "none"
    }

    if(scene === 6){
        document.getElementById("js--scene5").style.display = "none"
        document.getElementById("js--scene6").style.display = "block"
    }

    if(scene === 7){
        document.getElementById("js--scene6").style.display = "none"
        document.getElementById("js--scene7").style.display = "block"
    }

    if(scene === 8){
        document.getElementById("js--scene7").style.display = "none"
        document.getElementById("js--scene8").style.display = "block"
    }

    if(scene === 9){
        document.getElementById("js--scene8").style.display = "none"
        document.getElementById("js--scene9").style.display = "block"
    }

    if(scene === 10){
        document.getElementById("js--scene9").style.display = "none"
        document.getElementById("js--scene10").style.display = "block"
    }

    if(scene === 11){
        document.getElementById("js--scene8").style.display = "none"
        document.getElementById("js--scene11").style.display = "block"
    }

    if(scene === 12){
        document.getElementById("js--scene11").style.display = "none"
        document.getElementById("js--scene12").style.display = "block"
    }
}

toMenu = () =>{
    window.location.href = "index.html"
}