// Global Constants
const fieldSize = 1080;
let container;
let p5Canvas;
let postProcessLayer;
let ppContext;
const spirographs = [];
const defaultStrokeWeight = 0.25;

// For line styles
const DASHED = [2, 4];
const SOLID = [0];

// Controller variables
var chromaticAberrationPhase;
var chromaticAberrationStrength;
var xCenter;
var yCenter;

var radius;
var angle;
var step;

function setup() {

  createCanvas(fieldSize, fieldSize);
  background(72, 70, 170); // Cobalt background
  smooth();
  noFill();
  noStroke();
  ellipseMode(RADIUS);
  strokeWeight(defaultStrokeWeight);
  // noLoop(); // Disables frame rate after one draw cycle
  // scale(width, height); // sets coordinate system to pecentage-based

  container = document.getElementsByTagName("main")[0];
  p5Canvas = document.getElementById("defaultCanvas0"); // Automatically assigned by P5js
  postProcessLayer = document.getElementById("post-processor");
  ppContext = postProcessLayer.getContext("2d");
  ppContext.antiAlias = true;

  drawingContext.powerPreference = "high-performance";
  // drawingContext.setLineDash(SOLID);

  const GUI = createGui(':: INTERFACE ::');

  chromaticAberrationPhase = 2;
  chromaticAberrationStrength = 3;
  xCenter = width / 2;
  yCenter = height / 2;

  radius = 32;
  angle = 0;
  stepFactor = 8;
  step = TWO_PI / stepFactor; //in radians equivalent of 360/6 in degrees

  GUI.addGlobals(
    'width',
    'height',
    'xCenter',
    'yCenter',
    'radius',
    'angle',
    'chromaticAberrationPhase',
    'chromaticAberrationStrength'
  );

  // Add our post-processing canvas
  postProcessLayer.width = width;
  postProcessLayer.height = height;
  colorMode(RGB);

  noFill();
  stroke(255);
  strokeWeight(3);

  drawGlyph(xCenter, yCenter, 32);
}

function draw() {

  // Always keep the line below
  applyPostProcess();
}

/* --------------------------------------------------------------------------------------------------------------------------- */