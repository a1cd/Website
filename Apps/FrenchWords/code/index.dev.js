"use strict";

Pressure.set("button", {
  console: log("hi hi hi")
});

function pop(e) {
  var amount = 30;

  switch (e.target.dataset.type) {
    case 'shadow':
    case 'line':
      amount = 60;
      break;
  } // Quick check if user clicked the button using a keyboard


  if (e.clientX === 0 && e.clientY === 0) {
    var bbox = e.target.getBoundingClientRect();
    var x = bbox.left + bbox.width / 2;
    var y = bbox.top + bbox.height / 2;

    for (var i = 0; i < 30; i++) {
      // We call the function createParticle 30 times
      // We pass the coordinates of the button for x & y values
      createParticle(x, y, e.target.dataset.type);
    }
  } else {
    for (var _i = 0; _i < amount; _i++) {
      createParticle(e.clientX, e.clientY + window.scrollY, e.target.dataset.type);
    }
  }
}

function createParticle(x, y, type) {
  var particle = document.createElement('particle');
  document.body.appendChild(particle);
  var width = Math.floor(Math.random() * 30 + 8);
  var height = width;
  var destinationX = (Math.random() - 0.5) * 300;
  var destinationY = (Math.random() - 0.5) * 300;
  var rotation = Math.random() * 520;
  var delay = Math.random() * 200;

  switch (type) {
    case 'square':
      particle.style.background = "hsl(".concat(Math.random() * 90 + 270, ", 70%, 60%)");
      particle.style.border = '1px solid white';
      break;

    case 'emoji':
      particle.innerHTML = ['❤', '🧡', '💛', '💚', '💙', '💜', '🤎'][Math.floor(Math.random() * 7)];
      particle.style.fontSize = "".concat(Math.random() * 24 + 10, "px");
      width = height = 'auto';
      break;

    case 'mario':
      particle.style.backgroundImage = 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/mario-face.png)';
      break;

    case 'shadow':
      var color = "hsl(".concat(Math.random() * 90 + 90, ", 70%, 50%)");
      particle.style.boxShadow = "0 0 ".concat(Math.floor(Math.random() * 10 + 10), "px ").concat(color);
      particle.style.background = color;
      particle.style.borderRadius = '50%';
      width = height = Math.random() * 5 + 4;
      break;

    case 'line':
      var color = "hsl(".concat(Math.random() * 90 + 90, ", 70%, 50%)");
      particle.style.background = 'black';
      height = 1;
      rotation += 1000;
      delay = Math.random() * 1000;
      break;
  }

  particle.style.width = "".concat(width, "px");
  particle.style.height = "".concat(height, "px");
  var animation = particle.animate([{
    transform: "translate(-50%, -50%) translate(".concat(x, "px, ").concat(y, "px) rotate(0deg)"),
    opacity: 1
  }, {
    transform: "translate(-50%, -50%) translate(".concat(x + destinationX, "px, ").concat(y + destinationY, "px) rotate(").concat(rotation, "deg)"),
    opacity: 0
  }], {
    duration: Math.random() * 1000 + 5000,
    easing: 'cubic-bezier(0, .9, .57, 1)',
    delay: delay
  });
  animation.onfinish = removeParticle;
}

function removeParticle(e) {
  e.srcElement.effect.target.remove();
}

if (document.body.animate) {
  document.querySelectorAll('button').forEach(function (button) {
    return button.addEventListener('click', pop);
  });
}