/*

Officer: 3721950
CaseNum: 401-2-67953100-3721950

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and
has laced the cream cheese with an ingenious but vicious toxin. This one is quite
deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When alcohol goes above 0.52 and chlorine goes above 0.6, try decreasing charcoal by 0.05
	- If either amanita_mushrooms goes above 0.63, Deadly_Nightshade goes above 0.44, or perhaps botulinium goes above 0.51, increment charcoal by 0.01
	- When alcohol dips below 0.55 and chlorine dips below 0.25, or on the other hand, cyanide goes above 0.41, decrement calciumGluconate by 0.03
	- If Deadly_Nightshade dips below 0.75, amanita_mushrooms goes above 0.72, and also botulinium goes above 0.74, increment calciumGluconate by 0.02
	- If alcohol dips below 0.44 or chlorine dips below 0.71, reduce ethanol by 0.02
	- When cyanide goes above 0.42 or Deadly_Nightshade dips below 0.47, raise ethanol by 0.05
	- If chlorine dips below 0.36 and alcohol goes above 0.59, decrease insulin by 0.01
	- When Deadly_Nightshade goes above 0.57 or botulinium dips below 0.35, increase insulin by 0.01


Your conditional statements should:

consider the following poisons:

	- alcohol
	- amanita_mushrooms
	- cyanide
	- botulinium
	- chlorine
	- Deadly_Nightshade


and modify the following antidotes:

	- charcoal
	- calciumGluconate
	- ethanol
	- insulin


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var alcohol;
var amanita_mushrooms;
var cyanide;
var botulinium;
var chlorine;
var Deadly_Nightshade;


//Declare the antidote variables
var charcoal;
var calciumGluconate;
var ethanol;
var insulin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	alcohol = 0.5;
	amanita_mushrooms = 0.5;
	cyanide = 0.5;
	botulinium = 0.5;
	chlorine = 0.5;
	Deadly_Nightshade = 0.5;
	charcoal = 0.5;
	calciumGluconate = 0.5;
	ethanol = 0.5;
	insulin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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
	
if(alcohol > 0.52 && chlorine > 0.6)
   {
   //When alcohol goes above 0.52 and chlorine goes above 0.6, try decreasing charcoal by 0.05
	   charcoal -= 0.05;
   }

if(amanita_mushrooms > 0.63 || Deadly_Nightshade > 0.44 || botulinium > 0.51)
   {
   // If either amanita_mushrooms goes above 0.63, Deadly_Nightshade goes above 0.44, or perhaps botulinium goes above 0.51, increment charcoal by 0.01
	   charcoal += 0.01;
   }
if(alcohol <0.55 && chlorine < 0.25 || cyanide > 0.41)
   {
   // When alcohol dips below 0.55 and chlorine dips below 0.25, or on the other hand, cyanide goes above 0.41, decrement calciumGluconate by 0.03
	   calciumGluconate -= 0.03;
   }

	
if(Deadly_Nightshade < 0.75 && amanita_mushrooms > 0.72 && botulinium > 0.74)
   {
   //If Deadly_Nightshade dips below 0.75, amanita_mushrooms goes above 0.72, and also botulinium goes above 0.74, increment calciumGluconate by 0.02
	   calciumGluconate += 0.02;
   }
	
if(alcohol < 0.44 || chlorine < 0.71)
   {
   //If alcohol dips below 0.44 or chlorine dips below 0.71, reduce ethanol by 0.02
	   ethanol -= 0.02;
   }
	
if(cyanide > 0.42 || Deadly_Nightshade < 0.47)
   {
   //When cyanide goes above 0.42 or Deadly_Nightshade dips below 0.47, raise ethanol by 0.05
	   ethanol += 0.05;
   }
	
if(chlorine < 0.36 && alcohol > 0.59)
   {
   //If chlorine dips below 0.36 and alcohol goes above 0.59, decrease insulin by 0.01
	   insulin -= 0.01;
   }
	
if(Deadly_Nightshade > 0.57 || botulinium < 0.35)
   {
   //When Deadly_Nightshade goes above 0.57 or botulinium dips below 0.35, increase insulin by 0.01
	   insulin += 0.01;
   }
	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	alcohol = nextValue(graphs[0],alcohol);
	amanita_mushrooms = nextValue(graphs[1],amanita_mushrooms);
	cyanide = nextValue(graphs[2],cyanide);
	botulinium = nextValue(graphs[3],botulinium);
	chlorine = nextValue(graphs[4],chlorine);
	Deadly_Nightshade = nextValue(graphs[5],Deadly_Nightshade);


	charcoal = constrain(charcoal, 0, 1);
	calciumGluconate = constrain(calciumGluconate, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	insulin = constrain(insulin, 0, 1);


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
	text('alcohol: ' + nf(alcohol,1,2), 20,20);
	fill(colors[1]);
	text('amanita_mushrooms: ' + nf(amanita_mushrooms,1,2), 20,40);
	fill(colors[2]);
	text('cyanide: ' + nf(cyanide,1,2), 20,60);
	fill(colors[3]);
	text('botulinium: ' + nf(botulinium,1,2), 20,80);
	fill(colors[4]);
	text('chlorine: ' + nf(chlorine,1,2), 20,100);
	fill(colors[5]);
	text('Deadly_Nightshade: ' + nf(Deadly_Nightshade,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(charcoal,50,'charcoal');
	drawBar(calciumGluconate,200,'calciumGluconate');
	drawBar(ethanol,350,'ethanol');
	drawBar(insulin,500,'insulin');


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
