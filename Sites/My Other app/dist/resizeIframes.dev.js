"use strict";

function resizeIFrameToFitContent(iFrame) {
  iFrame.width = iFrame.contentWindow.document.body.scrollWidth;
  iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
}

window.addEventListener('DOMContentLoaded', function (e) {
  // or, to resize all iframes:
  var iframes = top.frames;

  for (var i = 0; i < iframes.length; i++) {
    // iframes[i].contentWindow.document.addEventListener("")
    var curFram = iframes[i];
    curFram.addEventListener("load", resizeIFrameToFitContent(iframes[i]));
  }
});