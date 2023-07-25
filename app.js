const app = new PIXI.Application(
{
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true,});
    document.body.appendChild(app.view)

document.body.appendChild(app.view);
const Graphics= PIXI.Graphics;

const circle= new Graphics();
circle.beginFill('Black')
.lineStyle(7, 0xFFFF00)
.drawCircle(1270, 700, 600, 600)
.endFill();
app.stage.addChild(circle);

app.stage.on('touchmove', (event) => {
    pointer.position.set(event.data.global.x, event.data.global.y);
});

const style= new PIXI.TextStyle({
    fontFamily: 'Helvetica',
    fontSize: 60,
    strokeThickness: 4,
    fill: 'Black',
    stroke: '#e6148e',
    strokeThickness: 6,
})
const myText= new PIXI.Text("Hi! I'm", style);
myText.x= 15;
myText.y= 5;
app.stage.addChild(myText);

const style1= new PIXI.TextStyle({
    fontFamily: 'Helvetica',
    fontSize: 60,
    strokeThickness: 2,
    fill: '#d51083',
    stroke: '#d51083',
    strokeThickness: 4,
})
const myText1= new PIXI.Text("Nandana.", style1);
myText1.x= 15;
myText1.y= 65;
app.stage.addChild(myText1);

const style2= new PIXI.TextStyle({
    fontFamily: 'Helvetica',
    fontSize: 60,
    strokeThickness: 1,
    fill: 'white',
    stroke: 'white',
    strokeThickness: 2,
})
const myText2= new PIXI.Text("Interaction Designer", style2);
myText2.x= 15;
myText2.y= 135;
app.stage.addChild(myText2);
const textToType = "Interaction Designer";
let initialText = '';
let index1 = 0;
const typeSpeed = 140;

const typeInterval = setInterval(() => {
  initialText += textToType[index1];
  myText2.text = initialText;
  index1++;

  if (index1 >= textToType.length) {
    clearInterval(typeInterval);
  }
}, 
typeSpeed);

// const rectangle= new Graphics();
// rectangle.beginFill(0x8A2BE2)
// .lineStyle(7, 0x8A2BE2)
// .drawRoundedRect(600, 560, 150, 150, 20)
// .endFill();
// //rectangle.pivot.set(675, 635);
// app.stage.addChild(rectangle);

let speed= 0.005;
let radius= 500;
let angle= 0;
// app.ticker.add(()=>
// {
//    let newX = xpos + radius * Math.cos(angle);
//    let newY = ypos + radius * Math.sin(angle);
//    rectangle.x = newX;
//    rectangle.y = newY;
//    angle += speed;
// });

var container = new PIXI.Container();
const rect_locations = [
  [600, 560],
  [650, 360 ],
  [750, 170 ],
  [945, 75 ],
  [1150, 40 ],
  [1350, 35 ],
];

function newRect(x, y, fillColor, lineColor, width, height, borderRadius) {
  const rect = new PIXI.Graphics();
  rect.beginFill(0x8A2BE2)
  .lineStyle(7, 0x8A2BE2)
  .drawRoundedRect(x, y, 150, 150, 20)
  .endFill();
   
  rect.interactive = true;
  rect.buttonMode = true;
  rect.on('pointerdown', onRectButtonDown)
      .on('pointerup', onRectButtonUp)
      .on('pointerupoutside', onRectButtonUp)
      .on('pointerover', onRectButtonDown)
      .on('pointerout', onRectButtonOut);
  return rect;
}
for (let i= 0; i< rect_locations.length; i++) {
  let rect = newRect(
    rect_locations[i][0],
    rect_locations[i][1],
    0x8A2BE2,
    0x8A2BE2, 
    150,      
    150,      
    20        
  );

  container.addChild(rect);
}
app.stage.addChild(container);

function onRectButtonDown(event) {
  const rect = event.target;
  if (!rect.messageAdded) {
    const messageText = new PIXI.Text("Project: 1", {
      fontFamily: 'helvetica',
      fontSize: 23,
      stroke: 1,
      fill: 'white',
      align: 'center',
    });
    const localBounds = rect.getLocalBounds();
    messageText.position.set(677, 600);
    messageText.anchor.set(0.5);
    rect.addChild(messageText);
    rect.messageAdded = true;
  }
}

function onRectButtonUp() {
  console.log("Button Up!");
}

function onRectButtonOver() {
  console.log("Button Over!");
}

function onRectButtonOut() {
  console.log("Button Out!");
}
// container.position.set( 600, 600 );
// container.pivot.x = container.width / 2;
// container.pivot.y = container.height / 2;

// app.ticker.add(function(delta) {
//   container.rotation -= 0.01 * delta;
// });

// const rectangle1= new Graphics();
// rectangle.beginFill(0x8A2BE2)
// .lineStyle(7, 0x8A2BE2)
// .drawRoundedRect(650, 360, 150, 150, 20)
// .endFill();
// app.stage.addChild(rectangle1);

// const rectangle2= new Graphics();
// rectangle2.beginFill(0x8A2BE2)
// .lineStyle(7, 0x8A2BE2)
// .drawRoundedRect(750, 170, 150, 150, 20)
// .endFill();
// app.stage.addChild(rectangle2);

// const rectangle3= new Graphics();
// rectangle3.beginFill(0x8A2BE2)
// .lineStyle(7, 0x8A2BE2)
// .drawRoundedRect(945, 75, 150, 150, 20)
// .endFill();
// app.stage.addChild(rectangle3);

// const rectangle4= new Graphics();
// rectangle.beginFill(0x8A2BE2)
// .lineStyle(7, 0x8A2BE2)
// .drawRoundedRect(1150, 40, 150, 150, 20)
// .endFill();
// app.stage.addChild(rectangle4);

// const rectangle5= new Graphics();
// rectangle.beginFill(0x8A2BE2)
// .lineStyle(7, 0x8A2BE2)
// .drawRoundedRect(1350, 35, 150, 150, 20)
// .endFill();
// app.stage.addChild(rectangle5);

const style3= new PIXI.TextStyle({
  fontFamily: 'Helvetica',
  fontSize: 27,
  strokeThickness: 1,
  fill: 'white',
  stroke: 'white',
  strokeThickness: 1,
})
const myText3= new PIXI.Text("Contact:", style3);
myText3.x= 1200;
myText3.y= 550;
app.stage.addChild(myText3);

const style4= new PIXI.TextStyle({
  fontFamily: 'Helvetica',
  fontSize: 23,
  strokeThickness: 1,
  fill: '0x8A2BE2',
  stroke: '0x8A2BE2',
  strokeThickness: 1,
})
const myText4= new PIXI.Text("+91 7400390634", style4);
myText4.x= 1200;
myText4.y= 600;
app.stage.addChild(myText4);

const style5= new PIXI.TextStyle({
  fontFamily: 'Helvetica',
  fontSize: 23,
  strokeThickness: 1,
  fill: '0x8A2BE2',
  stroke: '0x8A2BE2',
  strokeThickness: 1,
})
const myText5= new PIXI.Text("nandana.raj1903@gmail.com", style5);
myText5.x= 1200;
myText5.y= 630;
app.stage.addChild(myText5);

const style6= new PIXI.TextStyle({
  fontFamily: 'Helvetica',
  fontSize: 19,
  strokeThickness: 1,
  fill: '0xFFFF00',
  stroke: '0x8A2BE2',
  strokeThickness: 1,
})
const myText6= new PIXI.Text("Drag the cursor on the Rectangle", style6);
myText6.x= 1000;
myText6.y= 420;
app.stage.addChild(myText6);

//var image1= PIXI.Sprite.fromImage('phoneicon-removebg-preview.png');
//image1.position.x= 1089;
// image1.position.y= 424;
// image1.width= 65;
// image1.height= 40;
// app.stage.addChild(image1);

// var image2= PIXI.Sprite.fromImage('mailiconpng.png');
// image2.position.x= 1093;
// image2.position.y= 485;
// image2.width= 57;
// image2.height=57;
// app.stage.addChild(image2);

const pointer= new Graphics();
pointer.beginFill(0xffffff)
.lineStyle(1, ' Black')
.drawCircle(0,0, 9)
.endFill();
app.stage.addChild(pointer);
pointer.position.set(app.screen.width / 2, app.screen.height / 2);
app.stage.interactive = true;
app.stage.hitArea = app.screen;
app.stage.on('mousemove', (event) => {
    pointer.position.set(event.data.global.x, event.data.global.y);
});

app.start();