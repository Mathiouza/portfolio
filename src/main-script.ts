

window.onload = () => {

    setTimeout(() => {

        document.getElementById("space-wave").style.display = "none";

    }, 1200)

    setTimeout(() => {

        document.getElementById("main-wave").className = "wave wave-step2";
        window.scrollTo(0, 0)

    }, 200)

    setTimeout(() => {

        document.getElementById("space-wave").className = "wave wave-step2";

    }, 100)

    setTimeout(() => {

        document.getElementById("sec-wave").className = "wave wave-step2";

    }, 0)


}

window.onscroll = () => {

    const factor = 100*window.scrollY/window.innerHeight;

    if(factor < 100)
        document.getElementById("page-container").style.opacity = factor+"%";
    else
        document.getElementById("page-container").style.opacity = "100%";

}