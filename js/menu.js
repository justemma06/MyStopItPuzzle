var MenuController = {

    init: function() {

        this.setSoundButton();
        app.showView('menu-view');
        
        document.getElementById('start-game').addEventListener('click', function(){
            MenuController.startGame();
        });

        document.getElementById('continue-game').addEventListener('click', function(){
            MenuController.continueGame();
        });

        document.getElementById('select-level').addEventListener('click', function(){
            MenuController.selectLevel(this.level);
        });

        document.getElementById('load-credits').addEventListener('click', function(){
            MenuController.loadCredits();
        });

        document.getElementById('toggle-sound').addEventListener('click', function(){
            Sound.toggleSound();
            this.setSoundButton();
        }.bind(this));
    },

    setSoundButton: function() {
        var isActive = Sound.isSoundActive();
        document.getElementById('toggle-sound').innerHTML = (isActive) ? 'Sound: ON' : 'Sound: OFF';

        if(isActive) {
            app.playMusic();
        }else{
            app.pauseMusic();
        }

    },

    startGame: function() {
        LevelController.load(1);
    },


};