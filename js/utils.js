const utils = {

    showElement: function(elementId) {
        document.getElementById(elementId).style.display = 'block';
    },

    hideElement: function(elementId) {
        document.getElementById(elementId).style.display = 'none';
    },

    hideAllByClass: function(findClass) {
        const objects = document.getElementsByClassName(findClass);
        let i;
        for (i = 0; i < objects.length; i++) {
          let targetObject = objects[i];
          targetObject.style.display = 'none';
        }
    },

    findByClassRemoveClass: function(findClass, removeClass, exceptId) {
        let objects = document.getElementsByClassName(findClass);
        let i;
        for (i = 0; i < objects.length; i++) {
          let targetObject = objects[i];
          if (targetObject.classList.contains(removeClass) && targetObject.id != exceptId) {
            targetObject.classList.remove(removeClass);
          }
        }
    },

    findByIdRemoveClass: function(findId, removeClass) {
        let targetObject = document.getElementById(findId);
        if (targetObject.classList.contains(removeClass)) {
            targetObject.classList.remove(removeClass);
        }
    },

    findByIdAddClass: function(findId, addClass) {
        let targetObject = document.getElementById(findId);
        if (!targetObject.classList.contains(addClass)) {
            targetObject.classList.add(addClass);
        }
    }

}