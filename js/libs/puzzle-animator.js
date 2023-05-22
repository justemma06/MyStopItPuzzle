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
};