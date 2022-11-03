let music_bg = new Audio("music/menu.m4a");
let sound_splash = new Audio("sounds/splash.m4a")

let transitionTimer = setInterval ( () =>{
    let intro = document.getElementById("js--intro")
    let menu = document.getElementById("js--menu")

    intro.style.display = "none"
    menu.style.display = "block"

    music_bg.play();

    clearInterval(transitionTimer)
}, 6800)

startGame = () => {
    let menu = document.getElementById("js--menu")
    let button = document.getElementById("js--menuButton")
    let menuH1 = document.getElementById("js--menuH1")

    music_bg.pause();
    sound_splash.play()

    menu.classList.add("move_top")
    button.style.display = "none"
    menuH1.style.display = "none"

    setInterval( () => {
        window.location.href = "secondpage.html"
    }, 2800)
}