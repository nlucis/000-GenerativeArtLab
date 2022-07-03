// Global Constants
let p5Canvas, 
    container, 
    ppContext, 
    postProcessLayer
;

// Dimension references
let xCenter, yCenter;
const fieldSize = 1024;
const defaultStrokeWeight = 0.25;

// Contains any spirograph shapes for animation
const spirographs = [];

// line Style Types
const DASHED = [2, 4];
const SOLID = [0];

// Chromatic Aberration Properties
var chromaticAberrationPhase;
var chromaticAberrationStrength;

function setup() {

  createCanvas(fieldSize, fieldSize);
  background(255, 212, 25); // nLucis Creative 'sunny' Yellow
  smooth();
  noFill();
  noStroke();
  ellipseMode(RADIUS);
  strokeWeight(defaultStrokeWeight);

  container = document.getElementsByTagName("main")[0];
  p5Canvas = document.getElementById("defaultCanvas0"); // Automatically assigned by P5js
  postProcessLayer = document.getElementById("post-processor");
  ppContext = postProcessLayer.getContext("2d");
  ppContext.antiAlias = true;

  drawingContext.powerPreference = "high-performance";

  chromaticAberrationPhase = 0;
  chromaticAberrationStrength = 3;

  xCenter = width / 2;
  yCenter = height / 2;

  // Add our post-processing canvas
  postProcessLayer.width = width;
  postProcessLayer.height = height;
  colorMode(RGB);

  noFill();
  stroke(255);
  strokeWeight(3);
}

function draw() {

  // Always keep the line below
  applyPostProcess();
}
/* --------------------------------------------------------------------------------------------------------------------------- */