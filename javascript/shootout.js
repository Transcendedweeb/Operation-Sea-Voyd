let bullets = 6;

let music_bg = new Audio("music/shootout.m4a");
let sound_hit = new Audio("sounds/shot_hit.m4a");
let sound_gunshot = new Audio("sounds/gunshot.m4a")
music_bg.loop = true;
music_bg.play();

/* Shooting mechanic */
window.onclick = MouseClick => {
    let gun = document.getElementById("js--gun")
    let ammo_text1 = document.getElementById("js--ammo1")

    bullets = bullets - 1;

    if(bullets > 0){
        sound_gunshot.play();
        ammo_text1.innerHTML = bullets + " / 6"
        gun.src = "img/shoot-out/pistol_shoot.gif"

        let shoot = setInterval ( () =>{
            gun.src = "img/shoot-out/pistol_hold.png"
            clearInterval(shoot)
        }, 300)
    }

    else if(bullets === 0){
        /* disable clicken van elementen tijdens reloaden */
        let enemies = document.querySelectorAll("[data-obj='spawn']");
        enemies.forEach(enemy => enemy.classList.add("disable_mouse"));
        /* ---------------------------------------------  */

        sound_gunshot.play();
        ammo_text1.innerHTML = "RELOADING!"

        ammo_text1.classList.add("reloading")

        gun.src = "img/shoot-out/pistol_shoot.gif"

        let shoot = setInterval ( () =>{
            gun.src = "img/shoot-out/pistol_hold.png"
            clearInterval(shoot)
        }, 300)

        let reload = setInterval ( () =>{
            bullets = 6

            ammo_text1.classList.remove("reloading")

            ammo_text1.innerHTML = bullets + " / 6"

            enemies.forEach(enemy => enemy.classList.remove("disable_mouse"));
            clearInterval(reload)
        }, 5000)
    }
}
/* ---------------------------------------------  */

/* Enemy spawner */
let sp1 = document.getElementById("js--sp1")
let sp2 = document.getElementById("js--sp2")
let sp3 = document.getElementById("js--sp3")
let sp4 = document.getElementById("js--sp4")

let spawn_array = [sp1, sp2, sp3, sp4]

setInterval ( () =>{
    /* randomize order van array */
    for (var i = spawn_array.length - 1; i > 0; i--) {  /* i = lengte-1 voor de eerste element die altijd 0 is, zolang i niet 0 is blijf de for-loop runnen*/
        var randomized_elemnt = Math.floor(Math.random() * (i + 1)); /* Math.floor geeft een int afgerond van de gegeven nummer, namelijk een random nummer tussen 0 en i */
        var temp = spawn_array[i]; /* pak een element uit een random positie */
        spawn_array[i] = spawn_array[randomized_elemnt]; /* pak een ander random element van de array en plaats deze op de positie van de vorige */
        spawn_array[randomized_elemnt] = temp; /* doet het zelfde met de verwisselde element */
    }
    /* ----------------------------------------------------- */

    /* zoek naar een element */
    if(spawn_array[0] != 0){
        spawn_array[0].style.display = "block"
        spawn_array[0] = 0
    }else if(spawn_array[1] != 0){
        spawn_array[1].style.display = "block"
        spawn_array[1] = 0
    }else if(spawn_array[2] != 0){
        spawn_array[2].style.display = "block"
        spawn_array[2] = 0
    }else if(spawn_array[3] != 0){
        spawn_array[3].style.display = "block"
        spawn_array[3] = 0
    }
}, 2000)
/* ---------------------------------------------  */

/* victory handler */
let enemies_killed = 0;

victoryCheck = () =>{
    enemies_killed++;
    if(enemies_killed >= 25){
        //localStorage.clear();
        pauseTime()
        window.location.href = "computer.html"
    }
}
/* ---------------------------------------------  */

/* dood geschoten enemies handler */
shotHandler = (spawn_number) => {
    if(spawn_number === 1){
        sp1.style.display = "none"
        for(let i = 0; i < spawn_array.length; i++){ /* ga door array loopen */
            if(spawn_array[i] === 0){ /* als een 0 gevonden is */
                spawn_array[i] = sp1 /* zet element op deze plaats */
                victoryCheck() // check of je al heb gewonnen
                i = spawn_array.length /* break uit loop */
            }
        }

    }else if(spawn_number === 2){
        sp2.style.display = "none"
        for(let i = 0; i < spawn_array.length; i++){
            if(spawn_array[i] === 0){
                spawn_array[i] = sp2
                victoryCheck()
                i = spawn_array.length
            }
        }

    }else if(spawn_number === 3){
        sp3.style.display = "none"
        for(let i = 0; i < spawn_array.length; i++){
            if(spawn_array[i] === 0){
                spawn_array[i] = sp3
                victoryCheck()
                i = spawn_array.length
            }
        }

    }else if(spawn_number === 4){
        sp4.style.display = "none"
        for(let i = 0; i < spawn_array.length; i++){
            if(spawn_array[i] === 0){
                spawn_array[i] = sp4
                victoryCheck()
                i = spawn_array.length
            }
        }

    }
}
/* ---------------------------------------------  */

/* getting shot handler */
let blood = document.getElementById("js--blood")

setInterval ( () =>{
    for(let i = 0; i < spawn_array.length; i++){
        if(spawn_array[i] === 0){
            blood.style.display = "block"
            sound_hit.play();

            // time penalty handler
            if((time_array[2] <= 5) && (time_array[1] == 0) && (time_array[0] == 0)){
                let timer_text = document.querySelectorAll("[data-js='timer']");
                timer_text.forEach(text => text.innerHTML = "00:00")

                console.log("GAME OVER")
                localStorage.clear();
                clearTimeout(countdownInterval)
            }
            
            else if((time_array[0] == 0)){
                if(time_array[1] == 0){
                    time_array[2] = time_array[2] -5
                }
                else{
                    if(time_array[2] >= 5){
                        time_array[2] = time_array[2] -5
                    }
                    else{
                        left_over = 4 -time_array[2]
                        time_array[1] = time_array[1] -1
                        time_array[2] = 9 - left_over
                    }
                }
            }

            else{
                if(time_array[2] >= 5){
                    time_array[2] = time_array[2] -5
                }
                else{
                    left_over = 4 -time_array[2]
                    time_array[2] = 9 - left_over

                    if(time_array[1] == 0){
                        time_array[0] = time_array[0] -1
                        time_array[1] = 5
                    }
                    else{
                        time_array[1] = time_array[1] -1
                    }
                }
            }
            /* ---------------------------------------------  */

            let blood_effect = setInterval ( () => {
                blood.style.display = "none"
                clearInterval(blood_effect)
            }, 900)

            i = spawn_array.length
        }
    }
}, 5000)
/* ---------------------------------------------  */

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