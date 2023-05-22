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

    getMaxLevel: function() {
        return this.max_levels;
    },

    calcPoints: function(currentLevel, elapsed_time, lifes) {
        var points = 0;

        if(currentLevel.difficulty == 'easy') points = 100000;
        if(currentLevel.difficulty == 'normal') points = 150000;
        if(currentLevel.difficulty == 'hard') points = 200000;

        points -= elapsed_time;

        for(var i = 0; i < lifes; i++) { points += 37568; }

        if(points < 10000) points = 10000;

        points += (Math.random() * 1000) + (2000 - (currentLevel.speed * 3));
        points = Math.floor(points);

        this.saveRecord(currentLevel.id, points);

        return points;
    },

    getRecord: function(level_id) {
        var record = window.localStorage['level' + level_id + '_record'];
        if(!record) return 0;
        return record;
    },



};