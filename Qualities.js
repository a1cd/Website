let Qualities = document.getElementById("Qualities");
let quals = ["Stuff", "MoreStuff", "soMuchMoreStuff"];
for (const [index, element] of quals.entries()) {
    Qualities.style.animation =
    setTimeout(() => {
        var para = document.createElement("p"); // Create a <p> node
        var t = document.createTextNode(element); // Create a text node
        para.appendChild(t); 
        let style = para.style;
        style.padding = 0;
        style.opacity = 0;
        style.pos = "50vw";
        style.transitionTimingFunction = "ease";
        style.transition = "all 0.5s"
        style.transform = "translate(0, 100%)";
        Qualities.appendChild(para);
        setTimeout(() => {
            style.paddingTop = "0px"
            style.opacity = "1";
            style.transform = "translate(0, 0%)";
            setTimeout(() => {
                style.transform = "translate(0, -100%)";
                style.opacity = 0
                setTimeout(() => {
                    div = document.createElement("div")
                    div.style.paddingTop = style.size
                    let width = box.offsetWidth;
                    let height = box.offsetHeight;
                    Qualities.replaceChild()
                }, 500);
            }, 500);
        }, 500*(index+1));
    }, 0);
}