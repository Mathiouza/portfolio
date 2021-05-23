import { CodeArea } from "./code-area";

function showAbout() {
    document.getElementById("about").style.transition = "unset";
    document.getElementById("photo-space-wave").style.transition = "unset";
    document.getElementById("photo-main-wave").style.transition = "unset";
    document.getElementById("about").className = "about-hidden";

    document.getElementById("photo-space-wave").className = "wave photo-wave-step1";
    document.getElementById("photo-main-wave").className = "wave photo-wave-step1";
    document.getElementById("space-wave").style.display = "";
    document.getElementById("photo-space-wave").style.display = "";

    setTimeout(() => {
        document.getElementById("photo-space-wave").style.display = "none";
    }, 1800);
    setTimeout(() => {
        document.getElementById("space-wave").style.display = "none";
    }, 1200);
    setTimeout(() => {
        document.getElementById("photo-main-wave").className = "wave photo-wave-step2";
    }, 800);
    setTimeout(() => {
        document.getElementById("photo-space-wave").className = "wave photo-wave-step2";
    }, 700);
    setTimeout(() => {
        document.getElementById("about").className = "about-showed";
    }, 600);
    setTimeout(() => {
        document.getElementById("presentation").className = "presentation-hidden";
    }, 500);
    setTimeout(() => {
        document.getElementById("main-wave").className = "wave wave-step3";
    }, 200);
    setTimeout(() => {
        document.getElementById("space-wave").className = "wave wave-step3";
    }, 100);
    setTimeout(() => {
        document.getElementById("sec-wave").className = "wave wave-step3";
        document.getElementById("about").style.transition = "";
        document.getElementById("photo-space-wave").style.transition = "";
        document.getElementById("photo-main-wave").style.transition = "";
    }, 0);
}

function showSkills() {

    document.getElementById("code-box").className = "code-box-hidden";
    document.getElementById("code-container").className = "code-container-hidden";
    document.getElementById("space-wave").style.display = "";
    setTimeout(() => {
        document.getElementById("code-container").className = "code-container-showed";
    }, 900);
    setTimeout(() => {
        document.getElementById("code-box").className = "code-box-showed";
    }, 800);
    setTimeout(() => {
        document.getElementById("main-wave").className = "wave wave-step1";
    }, 200);
    setTimeout(() => {
        document.getElementById("space-wave").className = "wave wave-step3";
    }, 100);
    setTimeout(() => {
        document.getElementById("sec-wave").className = "wave wave-step3";
    }, 0);

}

function showAboutFromSkill() {
    document.getElementById("presentation").className = "presentation-hidden";
    showAbout();
}

document.getElementById("main-about-button").addEventListener("click", showAbout);
document.getElementById("skill-about-button").addEventListener("click", showAboutFromSkill);
document.getElementById("main-skills-button").addEventListener("click", showSkills);
document.getElementById("about-skills-button").addEventListener("click", showSkills);

let codeArea = new CodeArea(<HTMLTextAreaElement> document.getElementById("code-area"));

let htmlButton = document.getElementById("html-button");
let cssButton = document.getElementById("css-button");
let jsButton = document.getElementById("js-button");

htmlButton.addEventListener("click", () => {
    htmlButton.style.backgroundColor = "var(--sec-color)";
    cssButton.style.backgroundColor = "";
    jsButton.style.backgroundColor = "";
    codeArea.showHTML()
    codeArea.focus();
});
cssButton.addEventListener("click", () => {
    cssButton.style.backgroundColor = "var(--sec-color)";
    jsButton.style.backgroundColor = "";
    htmlButton.style.backgroundColor = "";
    codeArea.showCSS();
    codeArea.focus();
});
jsButton.addEventListener("click", () => {
    jsButton.style.backgroundColor = "var(--sec-color)";
    cssButton.style.backgroundColor = "";
    htmlButton.style.backgroundColor = "";
    codeArea.showJS();
    codeArea.focus();
});

htmlButton.click();

let resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
    codeArea.reset();
})

window.onload = () => {

    setTimeout(() => {

        document.getElementById("space-wave").style.display = "none";

    }, 1200)

    setTimeout(() => {

        document.getElementById("main-navigation").style.opacity = "100%";

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