/*

Officer: 3721950
CaseNum: 401-1-34839068-3721950

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos
with his foul toxin. The chaos is spreading. People are dropping like flies and burrito
sales have fallen through the floor. To make matters worse it seems Norbert has cottoned
on to our methods and has upped the complexity of his poison. You’ll find the antidote
harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When lead goes above 0.31, decrease hydrochloric_acid by 0.05
	- If cyanide goes above 0.57 and polonium goes above 0.56, try increasing hydrochloric_acid by 0.03
	- If lead dips below 0.52 or cyanide dips below 0.71, decrease CalciumChloride by 0.02
	- If polonium dips below 0.55, increment CalciumChloride by 0.03
	- When cyanide goes above 0.52, try decreasing ethanol by 0.03
	- If lead goes above 0.42 or spiderVenom dips below 0.53, increase ethanol by 0.04
	- If cyanide goes above 0.62 or polonium goes above 0.6, decrement antitoxin by 0.04
	- If spiderVenom dips below 0.55, try increasing antitoxin by 0.03


Your conditional statements should:

consider the following poisons:

	- lead
	- polonium
	- spiderVenom
	- cyanide


and modify the following antidotes:

	- hydrochloric_acid
	- CalciumChloride
	- ethanol
	- antitoxin


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var lead;
var polonium;
var spiderVenom;
var cyanide;


//Declare the antidote variables
var hydrochloric_acid;
var CalciumChloride;
var ethanol;
var antitoxin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	lead = 0.5;
	polonium = 0.5;
	spiderVenom = 0.5;
	cyanide = 0.5;
	hydrochloric_acid = 0.5;
	CalciumChloride = 0.5;
	ethanol = 0.5;
	antitoxin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
	
if(lead >= 0.31)
{
   //- When lead goes above 0.31, decrease hydrochloric_acid by 0.05
	hydrochloric_acid -= 0.05;
   }
	
	

   
   
if(polonium >= 0.56 && cyanide >= 0.57)
	{
		//- If cyanide goes above 0.57 and polonium goes above 0.56, try increasing hydrochloric_acid by 0.03
		hydrochloric_acid += 0.03; 
	}
else if(polonium <= 0.55)
	{
		///If polonium dips below 0.55, increment CalciumChloride by 0.03
		CalciumChloride += 0.03;
	}
		
		
if(lead <= 0.52 || cyanide <= 0.71)
	{
	   //If lead dips below 0.52 or cyanide dips below 0.71, decrease CalciumChloride by 0.02
		CalciumChloride -= 0.02;
	}
	
if (cyanide >= 0.52)
	{
		//When cyanide goes above 0.52, try decreasing ethanol by 0.03
		ethanol -= 0.03;
	}
	
	
if(lead >= 0.42 || spiderVenom <= 0.53)
   {
   // If lead goes above 0.42 or spiderVenom dips below 0.53, increase ethanol by 0.04
	ethanol += 0.04;
   }

if(cyanide >= 0.62 || polonium >= 0.6)
   {
   //If cyanide goes above 0.62 or polonium goes above 0.6, decrement antitoxin by 0.04
	antitoxin -= 0.04;
   }
	
if(spiderVenom <= 0.55)
	{
	//If spiderVenom dips below 0.55, try increasing antitoxin by 0.03
	antitoxin += 0.03;
	}
	
	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	lead = nextValue(graphs[0],lead);
	polonium = nextValue(graphs[1],polonium);
	spiderVenom = nextValue(graphs[2],spiderVenom);
	cyanide = nextValue(graphs[3],cyanide);


	hydrochloric_acid = constrain(hydrochloric_acid, 0, 1);
	CalciumChloride = constrain(CalciumChloride, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('lead: ' + nf(lead,1,2), 20,20);
	fill(colors[1]);
	text('polonium: ' + nf(polonium,1,2), 20,40);
	fill(colors[2]);
	text('spiderVenom: ' + nf(spiderVenom,1,2), 20,60);
	fill(colors[3]);
	text('cyanide: ' + nf(cyanide,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(hydrochloric_acid,50,'hydrochloric_acid');
	drawBar(CalciumChloride,200,'CalciumChloride');
	drawBar(ethanol,350,'ethanol');
	drawBar(antitoxin,500,'antitoxin');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
