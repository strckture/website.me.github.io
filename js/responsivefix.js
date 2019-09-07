 var height = window.innerHeight;
 var a = setInterval(function() { $(window).scrollTop(-1); resize(); }, 800); 

    $(window).on('resize', function() {
        resize();
    });

    var resize = function() {
        if(window.innerHeight != height) {
            height = window.innerHeight;
            $('.section').css('height', height + 'px');
        }
    };