$(document).ready(function(){
    $('#fullpage').fullpage({
        //sectionsColor: ['#000000','#161616','#000000','#161616','#000000','#161616']
        
        scrollingSpeed: 800,

        onLeave: function(origin, destination, direction) {
                    var leavingSection = this;

                    if (origin.index == 0) {
                        document.getElementById("nav").style.backgroundColor = "rgba(0, 0, 0, 0.8)";
                    }

                    else if (origin.index >= 1 && destination.index == 0 ){
                        document.getElementById("nav").style.backgroundColor = "";
                    }
        },

    });
});
