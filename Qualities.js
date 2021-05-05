let range = function (min, max) {
    const arr = Array(max - min + 1)
        .fill(0)
        .map((_, i) => i + min);
    return arr;
}
coolStuff(0)
console.log("tried")
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
function coolStuff(adder) {

    let timeDelay = 750
    let secondaryTime = timeDelay+250
    let distance = 3

    console.log("running")
    let Qualities = document.getElementById("Qualities");
    var quals = ["iOS", "Xcode", "SwiftUI", "Python", "Html", "CSS", "Javascript", "Swift"];
    for (i in range(0,3)) {
        var e = quals
        shuffle(e)
        quals = quals.concat(e)
    }
    for (const [index, element] of quals.entries()) {
        setTimeout(() => {
            if (document.getElementById(index) != null) {
                Qualities.removeChild(document.getElementById(index));
            }
            var para = document.createElement("p"); // Create a <p> node
            var t = document.createTextNode(element); // Create a text node
            para.appendChild(t);
            let style = para.style;
            style.padding = 0;
            style.opacity = 0;
            style.pos = "50vw";
            style.transitionTimingFunction = "bounce";
            style.transition = "all 0.5s";
            style.transform = "translate(0, "+String(distance)+"vw)";
            para.id = index;
            style.height = 0
            style.margin = 0
            // para.style = style;
            Qualities.appendChild(para);
            setTimeout(() => {
                style.paddingTop = "0px";
                style.opacity = "1";
                style.transform = "translate(0, 0vw)";
                // para.style = style;
                setTimeout(() => {
                    style.transform = "translate(0, -"+String(distance)+"vw)";
                    style.opacity = 0;
                    setTimeout(() => {
                        Qualities.removeChild(para)
                    }, secondaryTime);
                }, secondaryTime);
            }, secondaryTime*(Number(index)+1+Number(adder)));
        }, 0);
    }
    // coolStuff(adder+quals.length)
}