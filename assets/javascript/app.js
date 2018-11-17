//Sunset Animation on scroll
var regex = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/,
    sky = document.getElementById("sky"),
    mountainLayers = sky.querySelectorAll("path"),
    SVGoffsettop = sky.getBoundingClientRect().top,
    vertHeight = sky.getBoundingClientRect().height,
    sun = document.getElementById("sun");

//Scroll handler function containing the if/else statement
function scrollHandler() {
    if (window.scrollY < vertHeight) {
        Array.prototype.forEach.call(mountainLayers, function (layer) {
            var layerFill = layer.getAttribute("fill"),
                vertRoll = Math.abs(window.scrollY - vertHeight) / vertHeight;
            hslComponents = layerFill.match(regex).slice(1),
                newHSL = parseFloat(hslComponents[2]) * vertRoll;
            layer.style.fill = "hsl(" + hslComponents[0] + ", " + hslComponents[1] + "%, " + newHSL + "%)";
            sky.style.background = "linear-gradient(hsl(320, " + 100 * vertRoll + "%, " + 88 * vertRoll + "%),hsl(21, " + 100 * vertRoll + "%, " + 88 * vertRoll + "%),hsl(46, " + 100 * vertRoll + "%, " + 88 * vertRoll + "%))";
            sun.style.transform = "translate3d(0," + window.scrollY / 10 + "px, 0)";
        })
    } else {
        sky.style.transform = "translateY(-" + (window.scrollY - vertHeight) + "px)";
    }
}
window.onscroll = function () {
    window.requestAnimationFrame(scrollHandler);
}

//Add event listener to confirm pixel value of current scroll
window.addEventListener('scroll', function () {
    document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
    console.log(pageYOffset + 'px');
});
//Clouds parallax effect for bio section
function parallax() {
    //grab each parallax div
    let layerOne = document.getElementById('prlx_layer_1');
    let layerTwo = document.getElementById('prlx_layer_2');
    //if the scroll position is great than or equal to 890px
    if (window.pageYOffset >= 890) {
        layerOne.style.top = -(window.pageYOffset / 12) + 'px';
        layerTwo.style.top = -(window.pageYOffset / 4) + 'px';
    }
    //Clouds just disappear - probably a more elegant way to do this
    if (window.pageYOffset >= 3000) {
        layerOne.style.display = 'none';
        layerTwo.style.display = 'none';
    }
    else if (window.pageYOffset <= 3000) {
        layerOne.style.display = 'block';
        layerTwo.style.display = 'block';
    }
}
window.addEventListener('scroll', parallax, false);

//navbar
var elementPosition = $('#nav').css('top', 0).offset();

$(window).scroll(function () {
    $('#nav').css('position', ($(window).scrollTop() > elementPosition.top) ? 'fixed' : 'relative');
});


//Fireflies using GreenSock
var fireflies = 50;
var $container = $("#meadow");
var $containerWidth = $container.width();
var $containerHeight = $container.height();
var master = new TimelineMax();

for (var i = 0; i < fireflies; i++) {
    var firefly = $('<div class="firefly"></div>');
    TweenLite.set(firefly, {
        x: Math.random() * $containerWidth,
        y: Math.random() * $containerHeight
    });
    $container.append(firefly);
    flyTheFirefly(firefly);
}

function flyTheFirefly(elm) {
    var flyTl = new TimelineMax();
    var fadeTl = new TimelineMax({
        delay: Math.floor(Math.random() * 2) + 1,
        repeatDelay: Math.floor(Math.random() * 6) + 1,
        repeat: -1
    });

    fadeTl.to(
        [elm],
        0.25,
        { opacity: 0.25, yoyo: true, repeat: 1, repeatDelay: 0.2, yoyo: true },
        Math.floor(Math.random() * 6) + 1
    );

    flyTl
        .set(elm, { scale: Math.random() * 0.75 + 0.5 })
        .to(elm, Math.random() * 100 + 100, {
            bezier: {
                values: [
                    {
                        x: Math.random() * $containerWidth,
                        y: Math.random() * $containerHeight
                    },
                    {
                        x: Math.random() * $containerWidth,
                        y: Math.random() * $containerHeight
                    }
                ]
            },
            onComplete: flyTheFirefly,
            onCompleteParams: [elm]
        });
}