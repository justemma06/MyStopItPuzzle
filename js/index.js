
var app = {
    
    admobid: {},
    music: document.getElementById("music"),

    playMusic: function() {
        var isActive = Sound.isSoundActive();
        if(isActive) {
            this.music.play();
        }
    },

    pauseMusic: function() {
        this.music.pause();
        this.music.currentTime = 0;
    },

    showView: function(viewId) {
        utils.hideAllByClass('view');
        utils.showElement(viewId);
    },
};
