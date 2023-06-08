const Sound = {

    toggleSound: function() {
        let actualSound = this.isSoundActive();
        window.localStorage['sound'] = !actualSound;
    },

    isSoundActive: function() {
        if(localStorage.getItem("sound") === null) return true;
        return JSON.parse(window.localStorage['sound']);
    }

}