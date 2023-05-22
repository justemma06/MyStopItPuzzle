var Sound = {
    toggleSound: function() {
        var actualSound = this.isSoundActive();
        window.localStorage['sound'] = !actualSound;
    },
}