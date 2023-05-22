var utils = {

    showElement: function(elementId) {
        document.getElementById(elementId).style.display = 'block';
    },

    hideElement: function(elementId) {
        document.getElementById(elementId).style.display = 'none';
    },

    hideAllByClass: function(findClass) {
        var objects = document.getElementsByClassName(findClass);
        var i;
        for (i = 0; i < objects.length; i++) {
          var targetObject = objects[i];
          targetObject.style.display = 'none';
        }
    },

}