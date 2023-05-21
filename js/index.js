
var app = {
    
    admobid: {},
    music: document.getElementById("music"),

    playMusic: function() {
        var isActive = Sound.isSoundActive();
        if(isActive) {
            this.music.play();
        }
    },
};
