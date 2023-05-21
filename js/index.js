
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

    hideView: function(viewId) {
        utils.hideElement(viewId);
    },

    initialize: function() {

        var attachFastClick = Origami.fastclick;
        attachFastClick(document.body);

        MenuController.init();
        LevelsController.init();
        LevelController.init(); 
        CreditsController.init(); 

        this.playMusic();

        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

};
