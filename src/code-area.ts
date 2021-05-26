

enum State {

    HTML, CSS, JS

}

export class CodeArea {

    currentState:State = State.HTML;

    baseHTML:string = 
`<div id="skills-card-container">
    <h1>My skills</h1>
    <div id="skills-container">

    </div>
</div>`;
    baseCSS:string =
`#skills-card-container {
    margin-left:10px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    height:100%;
}

#skills-card-container > h1 {
    text-align: center;
}

#skills-container {
    display:flex;
    flex-wrap:wrap;
}

.skill {
    padding: 10px 10px;
    text-align:center;
    border-radius: 10px;
    border: var(--sec-color) 2px solid;
    color: var(--ter-color);
    font-size: xx-large;
    position:relative;
    flex: 1 1 auto;
    margin-bottom: 10px;
    margin-right: 10px;
}

@media screen and (max-width:1200px) {

    .skill {
        padding: 0px 0px;
        font-size: x-large;
    }

}`;
    baseJS:string =
`class Skill {

    constructor(name, point) {
        this.name = name;
        this.point = point;
    }

}

let skills = [
    new Skill("C++", 0.8),
    new Skill("C#", 0.7),
    new Skill("Java", 0.9),
    new Skill("JavaScript", 0.8),
    new Skill("HTML", 0.98),
    new Skill("CSS", 0.98),
    new Skill("Python", 0.7),
    new Skill("Lua", 0.6),
    new Skill("Drawing", 0.65),
    new Skill("3D Modelling", 0.6),
    new Skill("Story writing", 0.55),
    new Skill("Music composition", 0.5),
    new Skill("PHP", 0.6),
    new Skill("SQL", 0.7),
    new Skill("IA", 0.6),
    new Skill("Office Suite", 0.98),
    new Skill("Adobe Suite", 0.97)
];

skills.sort((a, b) => {
    
    if(a.point < b.point)
        return 1;
    else if(a.point === b.point) {
        return a.name.localeCompare(b.name);
    }
    else
        return -1;
    
});

for(let i = 0 ; i < skills.length ; i++) {
    document.getElementById("skills-container").innerHTML += "<div class='skill' id='skill"+i+"'>"+skills[i].name+"</div>";
    document.getElementById("skill"+i).style.background = "linear-gradient(to right, var(--sec-color), "+skills[i].point*100+"%, var(--sec-color), "+skills[i].point*100+"%, var(--main-color))";
}`;

    HTML:string = this.baseHTML;
    CSS:string = this.baseCSS;
    JS:string = this.baseJS;

    constructor(public codeArea:HTMLTextAreaElement) {
        this.codeArea.addEventListener("keydown", (e: KeyboardEvent) => {

            if(e.key === "Tab") {
        
                e.preventDefault();
        
                let start = this.codeArea.selectionStart;
                let end = this.codeArea.selectionEnd;

                let selection = this.codeArea.value.substring(start, end);

                if(selection.includes("\n")) {

                    while(start !== 0) {

                        start--;

                        if(this.codeArea.value.charAt(start) === "\n") {

                            start++;
                            break;

                        }

                    }

                    let startSelection = start;
                    this.codeArea.selectionStart = start;
                    selection = this.codeArea.value.substring(start, end);

                    while(selection.includes("\n")) {

                        this.codeArea.value = this.codeArea.value.substring(0,start)+"    "+this.codeArea.value.substring(start);
                        let antStart = start;
                        start = this.codeArea.value.indexOf("\n", start)+1;
                        end += 4;
                        selection = this.codeArea.value.substring(start, end);

                    }

                    this.codeArea.value = this.codeArea.value.substring(0,start)+"    "+this.codeArea.value.substring(start);

                    this.codeArea.selectionStart = startSelection;
                    this.codeArea.selectionEnd = end+4;

                }
                else {
                    this.codeArea.value = this.codeArea.value.substr(0, start)+"    "+this.codeArea.value.substr(end);
                    this.codeArea.selectionStart = this.codeArea.selectionEnd = start+4;
                }
    
            }

            this.saveState();
            this.updateResult();
        
        });

        this.codeArea.addEventListener("keyup", () => {

            this.saveState();
            this.updateResult();

        });

        this.codeArea.value = this.HTML;
        this.currentState = State.HTML;
        this.updateResult();
    }

    showHTML() {
        this.saveState();
        this.codeArea.value = this.HTML;
        this.currentState = State.HTML;
        this.updateResult();
    }

    showCSS() {
        this.saveState();
        this.codeArea.value = this.CSS;
        this.currentState = State.CSS;
        this.updateResult();
    }

    showJS() {
        this.saveState();
        this.codeArea.value = this.JS;
        this.currentState = State.JS;
        this.updateResult();
    }

    focus() {
        this.codeArea.focus();
    }

    reset() {

        this.HTML = this.baseHTML;
        this.CSS = this.baseCSS;
        this.JS = this.baseJS;

        if(this.currentState === State.HTML) {
            this.codeArea.value = this.HTML;
        }
        else if(this.currentState === State.CSS) {
            this.codeArea.value = this.CSS;
        }
        else if(this.currentState === State.JS) {
            this.codeArea.value = this.JS;
        }

        this.updateResult();

    }

    private saveState() {
        if(this.currentState === State.HTML) {
            this.HTML = this.codeArea.value;
        }
        else if(this.currentState === State.CSS) {
            this.CSS = this.codeArea.value;
        }
        else if(this.currentState === State.JS) {
            this.JS = this.codeArea.value;
        }
    }

    private updateResult() {
        document.getElementById("code-result").innerHTML = "<style>"+this.CSS+"</style>"+this.HTML;
        eval(this.JS);
    }

}