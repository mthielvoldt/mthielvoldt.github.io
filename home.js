
let welcomeLeft = document.querySelector(".welcome .leftPane")
var welcomeLeftStyle = getComputedStyle(welcomeLeft);

var skewAngleStr = getComputedStyle(document.documentElement)
  .getPropertyValue('--skew-angle');
console.log(skewAngleStr)
let skewAngle = -parseInt(skewAngleStr)

let w = welcomeLeft.clientWidth; 
let h = welcomeLeft.clientHeight;
let clipPercent = 100 - Math.tan(skewAngle*Math.PI/180)*100 * h / w


welcomeLeft.setAttribute("style", `clip-path: polygon(0 0, 100% 0, ${clipPercent}% 100%, 0 100%);`)


//document.documentElement.style.setProperty('--clip-percent', toString(clipPercent))
//document.documentElement.style.setProperty('--skew-angle', toString(skewAngle))
// 

console.log( clipPercent)

