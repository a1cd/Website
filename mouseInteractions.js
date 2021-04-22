(function() {
    // Init
    var container = document.getElementById("imageHolder"),
        inner = document.getElementById("mouseImage");
  
    // Mouse
    var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(event) {
            var e = event || window.event;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
            return "(" + this.x + ", " + this.y + ")";
        }
    };
  
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);
  
    //----------------------------------------------------
  
    var counter = 0;
    var mouseHolderX = 0;
    var mouseHolderY = 0;
    var refreshRate = 10;
    var mouseCheckRate = 10;
    var mouseRefreshMinimumDistance = 0.01;
    var isTimeToUpdate = function() {
        if (counter++ % refreshRate === 0) {
            console.log(mouse.x, mouse.y)
            if (Math.abs(mouse.x - mouseHolderX) > mouseRefreshMinimumDistance) {
                mouseHolderX = mouse.x
                return true
            } else if (Math.abs(mouse.y - mouseHolderY) > mouseRefreshMinimumDistance) {
                mouseHolderY = mouse.y
                return true
            } else {
                return counter % refreshRate === 0;
            }
        } else {
            return false
        }
    };
  
    //----------------------------------------------------
  
    var onMouseEnterHandler = function(event) {
      update(event);
    };
  
    var onMouseLeaveHandler = function() {
      inner.style = "";
    };
  
    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };
  
    //----------------------------------------------------
  
    var update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / (inner.offsetHeight*0.5)).toFixed(2),
        (mouse.x / (inner.offsetWidth*0.5)).toFixed(2)
      );
    };
  
    var updateTransformStyle = function(x, y) {
        let xDeg = x
            yDeg = y
        var style = "rotateX(" + xDeg + "deg) rotateY(" + yDeg + "deg)";
        inner.style.transform = style;
        inner.style.webkitTransform = style;
        inner.style.mozTranform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;
    };
  
    //--------------------------------------------------------
  
    container.onmousemove = onMouseMoveHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmouseenter = onMouseEnterHandler;
  })();