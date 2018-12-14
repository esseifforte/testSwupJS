
const animations = {
    '*': {
        in: function(next){
            document.querySelector('#swup').style.opacity = 0;
            TweenMax.to(document.querySelector('#swup'), 2, {
                opacity: 1,
                onComplete: next
            });
        },
        out: function(next){
            document.querySelector('#swup').style.opacity = 1;
            TweenMax.to(document.querySelector('#swup'), 2, {
                opacity: 0,
                onComplete: next
            });
        }
    },
}

const options = {
    debugMode: true,
    animations: animations,
    // support: false,
    preload: true,
}

const swupjs = new Swupjs(options);