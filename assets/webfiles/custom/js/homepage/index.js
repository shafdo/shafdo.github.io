
// typewritter

var app = document.getElementById('writter');
var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello World <img class="icon-xs" src="/assets/emojis/smiling-face-with-open-mouth.png">')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Welcome to my <strong>world</strong> <img class="icon-xs" src="/assets/emojis/earth-globe-americas.png">')
    .pauseFor(3000)
    .start();
    
// typewritter End


// Change SVG colors when hovered over btns

$("#blog-icon-btn").hover(function () {
        // over
        $("#blog-icon").addClass("svgcolorchange");
        $("#blog-title").addClass("animate__tada");

        $("#blog-title").removeClass("white");
        $("#blog-title").addClass("lightblue");
    }, function () {
        // out
        $("#blog-icon").removeClass("svgcolorchange");
        $("#blog-title").removeClass("animate__tada");

        $("#blog-title").removeClass("lightblue");
        $("#blog-title").addClass("white");
    }
);

$("#face-icon-btn").hover(function () {
        // over
        $("#face-icon").addClass("svgcolorchange");
        $("#me-title").addClass("animate__tada");

        $("#me-title").removeClass("white");
        $("#me-title").addClass("lightblue");
    }, function () {
        // out
        $("#face-icon").removeClass("svgcolorchange");
        $("#me-title").removeClass("animate__tada");

        $("#me-title").removeClass("lightblue");
        $("#me-title").addClass("white");
    }
);

// Change SVG colors when hovered over btns End


// particles
particlesJS.load('sec1', 'assets/particlejs-config/particles.json', function() {
    console.log('callback - particles.js config loaded');
});
// particles end