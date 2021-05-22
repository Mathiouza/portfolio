function showAbout() {

    document.getElementById("space-wave").style.display = "unset";

    setTimeout(() => {

        document.getElementById("photo-space-wave").style.display = "none";

    }, 1800)

    setTimeout(() => {

        document.getElementById("space-wave").style.display = "none";

    }, 1200)

    setTimeout(() => {

        document.getElementById("photo-main-wave").className = "wave photo-wave-step2";

    }, 800)

    setTimeout(() => {

        document.getElementById("photo-space-wave").className = "wave photo-wave-step2";

    }, 700)

    setTimeout(() => {

        document.getElementById("about").className = "about-showed";

    }, 600)

    setTimeout(() => {

        document.getElementById("presentation").className = "presentation-hidden";

    }, 500)

    setTimeout(() => {

        document.getElementById("main-wave").className = "wave wave-step3";

    }, 200)

    setTimeout(() => {

        document.getElementById("space-wave").className = "wave wave-step3";

    }, 100)

    setTimeout(() => {

        document.getElementById("sec-wave").className = "wave wave-step3";

    }, 0)
    
}

document.getElementById("about-button").addEventListener("click", showAbout)

window.onload = () => {

    setTimeout(() => {

        document.getElementById("space-wave").style.display = "none";

    }, 1200)

    setTimeout(() => {

        document.getElementById("navigation").style.opacity = "100%";

    }, 500)

    setTimeout(() => {

        document.getElementById("main-wave").className = "wave wave-step2";
        window.scrollTo(0,0);

    }, 200)

    setTimeout(() => {

        document.getElementById("space-wave").className = "wave wave-step2";

    }, 100)

    setTimeout(() => {

        document.getElementById("sec-wave").className = "wave wave-step2";

    }, 0)


}

window.onscroll = () => {
    window.scrollTo(0,0);
}

let navButtons = document.getElementsByClassName("nav-text");
let navArrows = document.getElementsByClassName("nav-arrow");

for(let i = 0 ; i < navButtons.length ; i++) {

    let b = <HTMLDivElement> navButtons[i];
    let a = <HTMLDivElement> navArrows[i];

    b.onmouseenter = () => {

        a.className = "nav-arrow rotate-nav-arrow";

    }

    b.onmouseleave = () => {

        a.className = "nav-arrow";

    }

}