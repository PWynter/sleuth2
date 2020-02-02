/*

Officer: 3721950
CaseNum: 401-0-76609139-3721950

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the
population down with a potent poison. Word has it that he is smuggling his venomous filth
via a streetside weiner stand. Hundreds of people have been affected, and the municipal
water company tells me that their sewers are at full capacity. This is no laughing matter.
I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:


You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When deadly_nightshade goes above 0.37, reduce methylene by 0.03
	- When SpiderVenom dips below 0.4, raise methylene by 0.02
	- When deadly_nightshade dips below 0.52, decrement insulin by 0.03
	- If SpiderVenom dips below 0.75, increase insulin by 0.04
	- When sarin goes above 0.66, try decreasing Calcium_Chloride by 0.03
	- When deadly_nightshade dips below 0.69, increment Calcium_Chloride by 0.01


Your conditional statements should:

consider the following poisons:

	- SpiderVenom
	- deadly_nightshade
	- sarin


and modify the following antidotes:

	- methylene
	- insulin
	- Calcium_Chloride


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var SpiderVenom;
var deadly_nightshade;
var sarin;


//Declare the antidote variables
var methylene;
var insulin;
var Calcium_Chloride;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	SpiderVenom = 0.5;
	deadly_nightshade = 0.5;
	sarin = 0.5;
	methylene = 0.5;
	insulin = 0.5;
	Calcium_Chloride = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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
 
	if(deadly_nightshade >= 0.37)
	   {
	   //When deadly_nightshade goes above 0.37, reduce methylene by 0.03
		   methylene -= 0.03;
	   }
	
	if(SpiderVenom <= 0.4)
	   {
	   //When SpiderVenom dips below 0.4, raise methylene by 0.02
		   methylene += 0.02;
	   }
	if(SpiderVenom <= 0.75 )
	   {
	   //- If SpiderVenom dips below 0.75, increase insulin by 0.04
		   insulin += 0.04;
	   }
	if(deadly_nightshade <= 0.52 )
	   {
	   //- When deadly_nightshade dips below 0.52, decrement insulin by 0.03
		   insulin -= 0.03;
	   }

	if(sarin >= 0.66)
	   {
	   //- When sarin goes above 0.66, try decreasing Calcium_Chloride by 0.03
		   Calcium_Chloride -= 0.03;
	   }
	
	if(deadly_nightshade <= 0.69)
		{
			//- When deadly_nightshade dips below 0.69, increment Calcium_Chloride by 0.01
			Calcium_Chloride += 0.01;
		}
		

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	SpiderVenom = nextValue(graphs[0],SpiderVenom);
	deadly_nightshade = nextValue(graphs[1],deadly_nightshade);
	sarin = nextValue(graphs[2],sarin);


	methylene = constrain(methylene, 0, 1);
	insulin = constrain(insulin, 0, 1);
	Calcium_Chloride = constrain(Calcium_Chloride, 0, 1);


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
	text('SpiderVenom: ' + nf(SpiderVenom,1,2), 20,20);
	fill(colors[1]);
	text('deadly_nightshade: ' + nf(deadly_nightshade,1,2), 20,40);
	fill(colors[2]);
	text('sarin: ' + nf(sarin,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(methylene,50,'methylene');
	drawBar(insulin,200,'insulin');
	drawBar(Calcium_Chloride,350,'Calcium_Chloride');


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
