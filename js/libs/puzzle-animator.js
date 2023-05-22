var puzzleAnimator = {

    img: null,
    canvas: null,
    canvasContext: null,
    pieces: [],
    originalPieces: [],
    pieceWidth: 0,
    pieceHeight: 0,
    puzzleWidth: 0,
    puzzleHeight: 0,

    // Animation Control
    interval: null,
    currentFrame: 0,
    maxFrames: 0,
    originalImageFrame: 0,
    paused: false,

    init: function(options) {

        this.clearAnimationData();

        this.options = options;
        this.options.speed = options.speed || 100;

        this.currentFrame = options.currentFrame || 0;
        this.maxFrames = options.maxFrames || 1;
        this.originalImageFrame = (options.originalImageFrame) || 1;
        this.paused = options.paused || false;

        this.loadImage();

    },

    clearAnimationData: function() {

        if(this.interval) clearInterval(this.interval);
        if(this.pieces) this.pieces = [];
        if(this.originalPieces) this.originalPieces = [];

        this.pieceWidth = 0;
        this.pieceHeight =  0;
        this.puzzleWidth = 0;
        this.puzzleHeight = 0;

    },

    loadImage: function(image_path) {

        if(this.img) this.img.remove();

        this.img = new Image();
        this.img.addEventListener('load',this.imageLoaded.bind(this),false);
        this.img.src = this.options.img || image_path;

    },

    imageLoaded: function() {
        this.pieceWidth = Math.floor(this.img.width / this.options.difficulty)
        this.pieceHeight = Math.floor(this.img.height / this.options.difficulty)
        this.puzzleWidth = this.pieceWidth * this.options.difficulty;
        this.puzzleHeight = this.pieceHeight * this.options.difficulty;

        this.makeCanvas();
        this.initPuzzle();
    },

    makeCanvas: function() {

        if(!this.canvas) this.canvas = document.getElementById(this.options.canvasId);
        if(!this.canvasContext) this.canvasContext = this.canvas.getContext('2d');

        this.clearContext();
        this.canvas.width = this.puzzleWidth;
        this.canvas.height = this.puzzleHeight;
        
    },

};