// // init controller
// var introController = new ScrollMagic.Controller();

// // create a scene
// var sunsetScene = new ScrollMagic.Scene({
//         duration: 100,    // the scene should last for a scroll distance of 100px
//         offset: 50    // start this scene after scrolling for 50px
//     })
//     .setPin("#sky") // pins the element for the the scene's duration
//     .addTo(controller); // assign the scene to the controller

    // var regex = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/,
    // sky = document.getElementById("sky"),
    // mountainLayers = sky.querySelectorAll("path"),
    // SVGoffsettop = sky.getBoundingClientRect().top,
    // vertHeight = sky.getBoundingClientRect().height,
    // sun = document.getElementById("sun");
    
    // function scrollHandler() {
    //       if (window.scrollY < vertHeight) {
    //       Array.prototype.forEach.call(mountainLayers, function(layer) { 
    //           var layerFill = layer.getAttribute("fill"),
    //           vertRoll = Math.abs(window.scrollY - vertHeight) / vertHeight;
    //           hslComponents = layerFill.match(regex).slice(1),
    //           newHSL = parseFloat(hslComponents[2]) * vertRoll;
    //           layer.style.fill = "hsl(" + hslComponents[0] +", "+ hslComponents[1] + "%, " +  newHSL + "%)";
    //           sky.style.background = "hsl(48, " + 100 * vertRoll + "%, " + 88 * vertRoll + "%)";
    //           sun.style.transform = "translate3d(0," + window.scrollY / 10 + "px, 0)";
    //         })
    //         } else {
    //             sky.style.transform = "translateY(-"+ (window.scrollY - vertHeight)+"px)";
    //     }
    // }
    
    // window.onscroll = function() {
    //         window.requestAnimationFrame(scrollHandler);
    // }