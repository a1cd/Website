"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var range = function range(min, max) {
  var arr = Array(max - min + 1).fill(0).map(function (_, i) {
    return i + min;
  });
  return arr;
};

coolStuff(0);
console.log("tried");

function shuffle(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function coolStuff(adder) {
  var timeDelay = 750;
  var secondaryTime = timeDelay + 250;
  var distance = 3;
  console.log("running");
  var Qualities = document.getElementById("Qualities");
  var Commons = "https://upload.wikimedia.org/wikipedia/commons";
  var quals = [[Commons + "/c/ca/IOS_logo.svg", 0], ["https://developer.apple.com/xcode/assets/elements/icons/xcode-12/xcode-12-96x96_2x.png", 1], ["https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png", 2], ["https://www.python.org/static/image/python-logo@2x.png", 3], [Commons + "/6/61/HTML5_logo_and_wordmark.svg", 4], [Commons + "/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png", 5], [Commons + "/9/99/Unofficial_JavaScript_logo_2.svg", 6], [Commons + "/7/78/Swift_logo.png", 7]];
  var qualsText = ["iOS", "xcode", "swiftui", "Python", "Html5", "CSS", "JavaScript", "Swift"];
  var qualsCopy = quals;

  for (i in range(0, 3)) {
    var e = qualsCopy;
    shuffle(e);
    quals = quals.concat(e);
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var _step$value = _slicedToArray(_step.value, 2),
          index = _step$value[0],
          element = _step$value[1];

      setTimeout(function () {
        if (document.getElementById(index) != null) {
          Qualities.removeChild(document.getElementById(index));
        }

        var div = document.createElement("div"); // Create a <p> node

        var image = document.createElement("img");

        if (element[0].endsWith(".svg")) {
          image.setAttribute("type", "text/svg");
          console.log(element[0], true);
        }

        var text = document.createTextNode(qualsText[element[1]]);
        image.setAttribute("src", element[0]);
        div.appendChild(image);
        div.appendChild(text);
        var textHeight = text.height;
        var style = div.style;
        var imageStyle = image.style;
        style.padding = 0;
        imageStyle.padding = 0;
        style.opacity = 0;
        style.transitionTimingFunction = "bounce";
        style.transition = "all 0.5s";
        style.transform = "translate(0," + String(distance) + "vw)";
        div.id = index;
        imageStyle.height = 0;
        style.height = 0;
        style.margin = 0;
        imageStyle.margin = 0; // image.style = style;

        Qualities.appendChild(div);
        setTimeout(function () {
          style.height = "100%";
          imageStyle.height = "10vw"; // text.style.height = textHeight;

          style.paddingTop = "0px";
          style.opacity = "1";
          style.transform = "translate(0,0vw)"; // image.style = style;

          setTimeout(function () {
            style.transform = "translate(0,-" + String(distance) + "vw)";
            style.opacity = 0;
            style.transition = "all 0.5s";
            imageStyle.height = 0;
            style.margin = 0;
            setTimeout(function () {
              Qualities.removeChild(div);
            }, secondaryTime);
          }, secondaryTime);
        }, secondaryTime * (Number(index) + 1 + Number(adder)));
      }, 0);
    };

    for (var _iterator = quals.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    } // coolStuff(adder+quals.length)

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function svgWaver(id) {
  var svg = document.getElementById(id);
  svg.style.off;
}