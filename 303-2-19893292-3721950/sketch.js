/*

Officer: 3721950
CaseNum: 303-2-19893292-3721950

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is pressed:
	- Make Secret_Box_Value_0 equal to the value of mouseY
	- Use the 'constrain' function to prevent Secret_Box_Value_0 from falling below 2 and going above 9

	When the mouse button is pressed:
	- Increment Secret_Box_Value_1 by 1
	- Use the 'constrain' function to prevent Secret_Box_Value_1 from falling below 2 and going above 14

	When the mouse button is pressed:
	- Make Secret_Box_Value_2 equal to the value of mouseY
	- Use the 'constrain' function to prevent Secret_Box_Value_2 from falling below 3 and going above 13

	Whilst the mouse is being dragged:
	- Decrement Secret_Box_Value_3 by 2
	- Use the 'constrain' function to prevent Secret_Box_Value_3 from falling below 4 and going above 16

	When the mouse button is released:
	- Make Secret_Box_Value_4 equal to the value of mouseX
	- Use the 'max' function to prevent Secret_Box_Value_4 from falling below 9



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var Secret_Box_Value_0;
var Secret_Box_Value_1;
var Secret_Box_Value_2;
var Secret_Box_Value_3;
var Secret_Box_Value_4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	Secret_Box_Value_0 = 0;
	Secret_Box_Value_1 = 0;
	Secret_Box_Value_2 = 0;
	Secret_Box_Value_3 = 0;
	Secret_Box_Value_4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mousePressed()
{
	
	//When the mouse button is pressed:
	//Make Secret_Box_Value_0 equal to the value of mouseY
	//Use the 'constrain' function to prevent Secret_Box_Value_0 from falling below 2 and going above 9
	console.log("mousePressed",mouseX,mouseY);
	Secret_Box_Value_0 = mouseY;
	Secret_Box_Value_0= constrain(Secret_Box_Value_0,2,9);
	console.log("Secret box", Secret_Box_Value_0);
	
	///When the mouse button is pressed:
	//- Increment Secret_Box_Value_1 by 1
	//- Use the 'constrain' function to prevent Secret_Box_Value_1 from falling below 2 and going above 14
	Secret_Box_Value_1 += 1;
	Secret_Box_Value_1 = constrain(Secret_Box_Value_1, 2, 14);
	console.log("Secret box value 1", Secret_Box_Value_1);
	
	//When the mouse button is pressed:
	//- Make Secret_Box_Value_2 equal to the value of mouseY
	//- Use the 'constrain' function to prevent Secret_Box_Value_2 from falling below 3 and going above 13
	Secret_Box_Value_2 = mouseY;
	Secret_Box_Value_2 = constrain(Secret_Box_Value_2, 3, 13);
	console.log("Secret box value 2", Secret_Box_Value_2);
	
}

function mouseDragged()
{
	//Whilst the mouse is being dragged:
	//- Decrement Secret_Box_Value_3 by 2
	//- Use the 'constrain' function to prevent Secret_Box_Value_3 from falling below 4 and going above 16
	Secret_Box_Value_3 -= 2;
	Secret_Box_Value_3 = constrain(Secret_Box_Value_3, 4, 16);
	console.log("Secret box balue 3", Secret_Box_Value_3)
}

function mouseReleased()
{
	//When the mouse button is released:
	//- Make Secret_Box_Value_4 equal to the value of mouseX
	//- Use the 'max' function to prevent Secret_Box_Value_4 from falling below 9
	Secret_Box_Value_4 = mouseX;
	Secret_Box_Value_4 = max(Secret_Box_Value_4,9);
}


///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,Secret_Box_Value_0, 12);
	pop();

	push();
	translate(120,380);
	drawDial(140,Secret_Box_Value_1, 18);
	pop();

	push();
	translate(280,170);
	drawDial(140,Secret_Box_Value_2, 17);
	pop();

	push();
	translate(280,380);
	drawDial(140,Secret_Box_Value_3, 21);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(Secret_Box_Value_4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}

