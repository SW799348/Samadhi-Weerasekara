// gsap.from("#page1 #box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotation:360,
//

document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
       document.querySelector("body").style.visibility = "hidden";
       document.getElementById("loader").style.visibility = "visible";
    } else {
       setTimeout(() => {
          document.getElementById("loader").style.display ="none";
          document.querySelector("body").style.visibility = "visible";
       }, 3000)
    }
};
 


const circleText = document.querySelector(".circleText");
circleText.innerHTML = circleText.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
	)
	.join("");


