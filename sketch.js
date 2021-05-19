let canvasX= 1000;
let canvasY= 1000;

let params = {

  // height
  height: 100,
  heightMin: 10,
  heightMax: 200,
 //width
  width: 75,
  widthMin:10,
  widthMax:200,
};



// the gui object
let gui;

// let changeX = 75;
// let changeY = 100;

function setup() {
  createCanvas(canvasX, canvasY);
  gui = createGui('Number of Circles');
  gui.addObject(params);
}



function draw() {
  changeY = params.height;
  changeX = params.width;
stroke(126);
// GRID GUIDE
// line(500,0,500,50);
// line(100,0,100,50);
// line(900,0,900,50);
// line(400,0,400,50);
// line(600,0,600,50);

let topCntrOne = 450;
let topCntrTwo = 200;
let topCntrThree = 650;
let topCntrFour = 200;

// TOP LINE
// left line
line(topCntrOne ,topCntrTwo ,topCntrOne - changeX, topCntrTwo + changeY);
// center line
line(topCntrOne,topCntrTwo,topCntrThree,topCntrFour);
// right line
line(topCntrThree,topCntrFour,topCntrThree + changeX , topCntrFour + changeY);

// BOTTOM LINE
let firstBtmY = 600;
let secondBtmY = firstBtmY - changeY;
// left line
line(topCntrOne, topCntrTwo + firstBtmY, topCntrOne - changeX, topCntrTwo + secondBtmY);
// center line
line(topCntrOne, topCntrTwo + firstBtmY, topCntrThree, topCntrFour + firstBtmY);
// right line
line(topCntrThree, topCntrFour + firstBtmY, topCntrThree + changeX,  topCntrFour + secondBtmY);

// LEFT LINE

let leftCntrOne = 300;
let leftCntrTwo = 400 ;
let leftCntrThree = 300;
let leftCntrFour = 600;

// left line
line(leftCntrOne,leftCntrTwo, leftCntrOne + changeX, leftCntrTwo - changeY);
// center line
line(leftCntrOne, leftCntrTwo, leftCntrThree, leftCntrFour);
// // right line
line(leftCntrThree, leftCntrFour,  leftCntrThree + changeX, leftCntrFour + changeY);

let firstRightX = 500;
let secondRightX = firstRightX-changeX; 

// RIGHT LINE
// left line
line(leftCntrOne + firstRightX, leftCntrTwo, leftCntrOne + secondRightX, leftCntrTwo -changeY);
// center line
line( leftCntrOne + firstRightX, leftCntrTwo, leftCntrThree + firstRightX ,leftCntrFour);
// // right line
line(leftCntrThree + firstRightX, leftCntrFour ,leftCntrThree + secondRightX, leftCntrFour + changeY);

}
