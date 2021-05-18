let canvasX= 1000;
let canvasY= 1000;

function setup() {
  createCanvas(canvasX, canvasY);
}



function draw() {

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
let changeX = 75
let changeY = 100
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

let leftCntrOne = 150;
let leftCntrTwo = 390;
let leftCntrThree = 150;
let leftCntrFour = 610;

// left line
line(leftCntrOne,leftCntrTwo, leftCntrOne + changeX, leftCntrTwo - changeY);
// center line
line(leftCntrOne, leftCntrTwo, leftCntrThree, leftCntrFour);
// // right line
line(leftCntrThree, leftCntrFour,  leftCntrThree + changeX, leftCntrFour + changeY);

let firstRightX = 800;
let secondRightX = firstRightX-changeX; 

// RIGHT LINE
// left line
line(leftCntrOne + firstRightX, leftCntrTwo, leftCntrOne + secondRightX, leftCntrTwo -changeY);
// center line
line( leftCntrOne + firstRightX, leftCntrTwo, leftCntrThree + firstRightX ,leftCntrFour);
// // right line
line(leftCntrThree + firstRightX, leftCntrFour ,leftCntrThree + secondRightX, leftCntrFour + changeY);

}
