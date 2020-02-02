/*

Officer: 3721950
CaseNum: 303-3-25822686-3721950

Case 303 - The Case of the Crooked Attorney
Stage 4 - The Courthouse

Torvalds has his final safe in his courthouse chambers. Luckily there is a court case proceeding.
You can sneak into his chambers whilst he makes his closing statement.

Crack the safe by doing the following:

	When the mouse button is released:
	- Use the 'map' function to scale mouseY to values ranging from 2 to 12.
	- Assign the output to restrictedStorageComb0

	When the mouse button is pressed:
	- Use the 'map' function to scale mouseY to values ranging from 1 to 12.
	- Assign the output to restrictedStorageComb1

	When any key is released:
	- Make restrictedStorageComb2 equal to the value of 'key'

	When the mouse button is pressed:
	- Use the 'map' function to scale mouseX to values ranging from 14 to 68.
	- Assign the output to restrictedStorageComb3

	When the mouse button is pressed:
	- Use the 'map' function to scale mouseY to values ranging from 20 to 76.
	- Assign the output to restrictedStorageComb4

	Whilst the mouse is being dragged:
	- Use the 'map' function to scale mouseX to values ranging from 15 to 76.
	- Assign the output to restrictedStorageComb5



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- key, keyCode
	- random
	- map

*/

//declare the variables

var restrictedStorageComb0;
var restrictedStorageComb1;
var restrictedStorageComb2;
var restrictedStorageComb3;
var restrictedStorageComb4;
var restrictedStorageComb5;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	restrictedStorageComb0 = 0;
	restrictedStorageComb1 = "";
	restrictedStorageComb2 = "";
	restrictedStorageComb3 = 0;
	restrictedStorageComb4 = 0;
	restrictedStorageComb5 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mouseReleased()
{
	//When the mouse button is released:
	//- Use the 'map' function to scale mouseY to values ranging from 2 to 12.
	//- Assign the output to restrictedStorageComb0	
	restrictedStorageComb0 = map(mouseY,0,512,2,12);
	console.log("restricted Storage comb 0", restrictedStorageComb0);
}

function mousePressed()
{
	//When the mouse button is pressed:
	//- Use the 'map' function to scale mouseY to values ranging from 1 to 12.
	//- Assign the output to restrictedStorageComb1
	restrictedStorageComb1 = map(mouseY, 0, 512, 1, 12);
	console.log("restricted Storage comb 1 ", restrictedStorageComb0);
	
	//When the mouse button is pressed:
	//- Use the 'map' function to scale mouseX to values ranging from 14 to 68.
	//- Assign the output to restrictedStorageComb3	
	restrictedStorageComb3 = map(mouseX, 0, 512, 14, 68);
	
	//When the mouse button is pressed:
	//- Use the 'map' function to scale mouseY to values ranging from 20 to 76.
	//- Assign the output to restrictedStorageComb4
	restrictedStorageComb4 = map(mouseY, 0, 512, 20, 76);
}

function keyReleased()
{
	//When any key is released:
	//- Make restrictedStorageComb2 equal to the value of 'key'
	restrictedStorageComb2 = key;
	console.log("restricted Storage comb 2", restrictedStorageComb2);
}


function mouseDragged()
{
	//Whilst the mouse is being dragged:
	//- Use the 'map' function to scale mouseX to values ranging from 15 to 76.
	//- Assign the output to restrictedStorageComb5
	restrictedStorageComb5 = map(mouseX, 0, 512, 15, 76);
}


///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dial
	push();
	translate(256,180);
	drawDial(170,restrictedStorageComb0,20);
	pop();

	//Draw the spinners
	push();
	translate(206,280);
	drawSpinner(3, restrictedStorageComb1);
	pop();

	push();
	translate(306,280);
	drawSpinner(3, restrictedStorageComb2);
	pop();

	//Draw the levers
	push();
	translate(125,356);
	drawLever(restrictedStorageComb3);
	pop();

	push();
	translate(250,356);
	drawLever(restrictedStorageComb4);
	pop();

	push();
	translate(375,356);
	drawLever(restrictedStorageComb5);
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

function drawSpinner(numSpinners, val)
{
	var sw = 20;
	var ow = (sw + 5) * numSpinners + 5;
	stroke(0);
	fill(100);
	rect(-ow/2,0,ow,35);
	if(typeof(val) == "number")
	{
		val = floor(val).toString(); //convert to string
	}
	var d = numSpinners - val.length;

	for(var d = numSpinners - val.length; d > 0; d--)
	{
		val = "-" + val;
	}

	for(var i = 0; i < numSpinners; i++)
	{
		stroke(0);
		fill(255,255,200);
		rect(-ow/2 + i * (sw + 5) + 5,5,20,25);
		fill(0);
		noStroke();
		text(val[i],-ow/2 + sw/2 + i * (sw +5),25);
	}

}
