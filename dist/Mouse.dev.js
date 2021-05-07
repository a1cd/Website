"use strict";

(function () {
  console.log(navigator.userAgent);

  var isMobileDevice = function isMobileDevice() {
    var ua = navigator.userAgent;

    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return true;
    }

    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return true;
    }

    return false;
  };

  console.log(isMobileDevice); // Init

  var container = document.getElementById("imageHolder"),
      inner = document.getElementById("mouseImage");
  var orientaion = {
    // absolute,
    // alpha,
    // beta,
    // gamma,
    handleOrientation: function handleOrientation(event) {
      this.absolute = event.absolute;
      this.alpha = event.alpha;
      this.beta = event.beta;
      this.gamma = event.gamma; // Do stuff with the new orientation data
    }
  };
  window.addEventListener("deviceorientation", orientaion.handleOrientation, true); // Mouse

  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function updatePosition(event) {
      if (isMobileDevice()) {
        this.x = orientaion.alpha;
        this.y = orientaion.beta;
      } else {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      }
    },
    setOrigin: function setOrigin(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function show() {
      return "(" + this.x + ", " + this.y + ")";
    }
  }; // Track the mouse position relative to the center of the container.

  mouse.setOrigin(container); //----------------------------------------------------

  var counter = 0;
  var mouseHolderX = 0;
  var mouseHolderY = 0;
  var refreshRate = 10;
  var mouseCheckRate = 10;
  var mouseRefreshMinimumDistance = 0.01;

  var isTimeToUpdate = function isTimeToUpdate() {
    if (counter++ % refreshRate === 0) {
      console.log(mouse.x, mouse.y);

      if (Math.abs(mouse.x - mouseHolderX) > mouseRefreshMinimumDistance) {
        mouseHolderX = mouse.x;
        return true;
      } else if (Math.abs(mouse.y - mouseHolderY) > mouseRefreshMinimumDistance) {
        mouseHolderY = mouse.y;
        return true;
      } else {
        return counter % refreshRate === 0;
      }
    } else {
      return false;
    }
  }; //----------------------------------------------------


  var onMouseEnterHandler = function onMouseEnterHandler(event) {
    update(event);
    mouse.setOrigin(container);
  };

  var onMouseLeaveHandler = function onMouseLeaveHandler() {
    inner.style = "";
  };

  var onMouseMoveHandler = function onMouseMoveHandler(event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  }; //----------------------------------------------------


  var update = function update(event) {
    mouse.updatePosition(event);
    updateTransformStyle((mouse.y / (inner.offsetHeight * 0.5)).toFixed(2), (mouse.x / (inner.offsetWidth * 0.5)).toFixed(2));
  };

  var updateTransformStyle = function updateTransformStyle(x, y) {
    var xDeg = x;
    yDeg = y;
    var style = "rotateX(" + xDeg + "deg) rotateY(" + yDeg + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTranform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  }; //--------------------------------------------------------


  container.onmousemove = onMouseMoveHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmouseenter = onMouseEnterHandler;
  var gyroscope = new Gyroscope({
    frequency: 60
  });
  gyroscope.addEventListener('reading', function (e) {
    console.log("Angular velocity along the X-axis " + gyroscope.x);
    console.log("Angular velocity along the Y-axis " + gyroscope.y);
    console.log("Angular velocity along the Z-axis " + gyroscope.z);
  });
  gyroscope.start();
})();