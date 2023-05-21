// check device 
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var scriptSrc = isMobile ? "mouse/animations/animation-script-mobile.js" : "mouse/animations/animation-script.js";

// create script element
var script = document.createElement("script");
script.src = scriptSrc;

// append script element to document
document.body.appendChild(script);
