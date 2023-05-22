var Level = {
    max_levels : 50,

    getAll: function(success) {
        success(levels);
    },

    get: function(id, success) {

        this.getAll(function(levels){
            levels.forEach(function(level) {
                if(level.id == id) success(level);
            })
        });

    },

    unlockNextLevel: function(actual_id) {
        var last_level = this.getLastLevel();

        if(actual_id >= last_level ) {
            window.localStorage['last_level'] = (actual_id < this.max_levels) ? actual_id + 1 : actual_id;
        }
    },

    getLastLevel: function() {
        return window.localStorage['last_level'] || 1;
    },


};