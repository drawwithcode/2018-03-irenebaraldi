function preload(){
  // put preload code here
}
var myGray = [ '#949494','#B2B2B2','#D6D6D6','#91867E'
               ,'#B2AAA4','#D9D5D2']

var myGreen = ['#12AD2A','#63D13E','#90F500','#12E603',
               '#63FF20','#B9FF4D','#12F729','#0FF591','#8CFACA',
               '#4242EE','#443E33','#FFD933','#356244','#4B8C61',
               '#AAD1B7',]

var myPink = ['#9C225D','#DB3082','#FF3898','#FF54A7',
'#FF71B5','#E4239D','#E840AA','#EC5DB7','#3A2FD6',
'#9BEF05','#FF8D38','#D5647C','#DB778D','#E7A1B0']

var myOrange = ['#B44010','#E55300','#FF6900','#FF2B00',
'#FF4023','#FF5C00','#FF8106','#FF9F0O','#FEC34D','#003BAE'
,'#15AB00','#FFFC00','#FEA877','#FBC299','#FBD489'];

var myTeal = ['#2F56E9','#2D64F5','#2F8DFF','#33ABF9',
'#52DBFF','#17ECEC','#6EFFFF','#A8FFFF','#A9FF2F',
'#FFAD2F','#FF2F9A','#3081EE','#6EC1F8','#AEEAFF'];


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  background('#e0e0e0');
  frameRate(12);

     }


function draw() {
  // put drawing code here
  for(var x = random()*25; x < width; x += 20*random()) {
    for(var y = random()*25; y < height; y += 20*random()) {

      var indexGray = floor(random() * myGray.length);
      var colorGray = myGray[indexGray];

      var indexTeal = floor(random() * myTeal.length);
      var colorTeal = myTeal[indexTeal];

      var indexOrange = floor(random() * myOrange.length);
      var colorOrange = myOrange[indexOrange];

      var indexGreen = floor(random() * myGreen.length);
      var colorGreen = myGreen[indexGreen];

      var indexPink = floor(random() * myPink.length);
      var colorPink = myPink[indexPink];

      fill(color(colorGray));

      if (pmouseX > width/2 && pmouseY > height/2) {
        fill(color(colorPink));
      } else if (pmouseX > width/2 && pmouseY < height/2) {
       fill(color(colorOrange));
     } else if (pmouseX < width/2 && pmouseY < height/2) {
       fill(color(colorGreen));
     } else if (pmouseX < width/2 && pmouseY > height/2) {
       fill(color(colorTeal));
     }

      noStroke();
      ellipse(x, y, random()*10);

      rectMode(CENTER)
      fill(255, 255, 255, 0.9);
      rect(width/2,590,600,50);

        textAlign(CENTER);
      textFont('Futura');
      fill(color('#000000'));
      textSize(35);
      text('Move the cursor to change colour', width/2, 600);




}
}
}
