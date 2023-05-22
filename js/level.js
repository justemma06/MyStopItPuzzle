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

    saveRecord: function(level_id, points) {
        var record = this.getRecord(level_id);
        if(points > record) {
            window.localStorage['level' + level_id + '_record'] = points;
        }
    }



};

var LevelsController = {
    init: function() {
        document.getElementById('levels-home').addEventListener('click', function(){
            app.showView('menu-view');
        })
    },

    load: function() {
        var levels = Level.getAll(function(levels) {
            app.showView('levels-view');
            this.makeLevelsList(levels);
        }.bind(this))
    },

    makeLevelsList: function(levels) {
        var levelsContainer = document.getElementById('levels-container');
        levelsContainer.innerHTML = '';

        levels.forEach(function(level) {

            var levelDiv = document.createElement('div');
            levelDiv.innerHTML = LevelsController.makeLevelItem(level);
            levelDiv.level = level.id;
            levelDiv.classList.add('level-item');
            
            if(level.id <= Level.getLastLevel()){
                levelDiv.classList.add('active')
            } else {
                levelDiv.classList.add('inactive')
            };

            levelDiv.addEventListener('click', function(){
                if(this.level > Level.getLastLevel()) return;
                LevelController.load(this.level);
            })

            levelsContainer.appendChild(levelDiv);

        });   
    },

    makeLevelItem: function(level) {
        var html =
               '<div class="level-column">' + level.id + 
               '. <img class="level-img" src="' + 'img/levels/'  + level.id + '.jpg' + '">' +
               '</div>' +
               '<div class="level-column level-description">'+
               '<b>Difficulty:</b> ' + level.difficulty + '<br>' +
               '<b>Your Score:</b> ' + Level.getRecord(level.id) +
               '</div>';

        return html;
    }
};

var LevelController = {
    
};