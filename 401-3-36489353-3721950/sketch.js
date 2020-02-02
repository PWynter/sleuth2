/*

Officer: 3721950
CaseNum: 401-3-36489353-3721950

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	
	
	
	
	
	
	
	
	
	


Your conditional statements should:

consider the following poisons:

	- lead
	- deadly_nightshade
	- alcohol
	- amanita_mushrooms
	- formaldehyde
	- arsenic
	- snakeVenom
	- warfarin


and modify the following antidotes:

	- antivenom
	- chalk
	- antibodies
	- ethanol
	- paracetamol


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var lead;
var deadly_nightshade;
var alcohol;
var amanita_mushrooms;
var formaldehyde;
var arsenic;
var snakeVenom;
var warfarin;


//Declare the antidote variables
var antivenom;
var chalk;
var antibodies;
var ethanol;
var paracetamol;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	lead = 0.5;
	deadly_nightshade = 0.5;
	alcohol = 0.5;
	amanita_mushrooms = 0.5;
	formaldehyde = 0.5;
	arsenic = 0.5;
	snakeVenom = 0.5;
	warfarin = 0.5;
	antivenom = 0.5;
	chalk = 0.5;
	antibodies = 0.5;
	ethanol = 0.5;
	paracetamol = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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
	
	
//- When either snakeVenom dips below 0.73, alcohol dips below 0.63, arsenic dips below 0.71, or perhaps warfarin goes above 0.54, reduce antivenom by 0.03
if((snakeVenom < 0.73 || alcohol < 0.63) || (arsenic < 0.71 || warfarin > 0.54))
{
	antivenom -= 0.03
}
	
//- If deadly_nightshade dips below 0.45 or amanita_mushrooms goes above 0.33, whilst at the same time, lead goes above 0.52 or formaldehyde dips below 0.31, try increasing antivenom by 0.04
if((deadly_nightshade < 0.45 || amanita_mushrooms > 0.33) && (lead > 0.52 || formaldehyde < 0.31))
{
   antivenom += 0.04
}

//	- If deadly_nightshade goes above 0.75 and amanita_mushrooms dips below 0.26, whilst at the same time, snakeVenom dips below 0.5 or lead goes above 0.6, decrease chalk by 0.05
if((deadly_nightshade > 0.75 && amanita_mushrooms < 0.26)&& (snakeVenom < 0.5 || lead > 0.6)) 
{
	chalk -= 0.05
}

//	- When formaldehyde dips below 0.66 or alcohol dips below 0.67, whilst at the same time, arsenic goes above 0.45 or warfarin goes above 0.26, raise chalk by 0.05
	
if((formaldehyde < 0.66 || alcohol < 0.67) && (arsenic > 0.45 || warfarin > 0.26))
{
	chalk += 0.05
}
	
//- If lead goes above 0.44, or on the other hand, arsenic dips below 0.58 and warfarin dips below 0.34, decrement antibodies by 0.03
if(lead > 0.44 || (arsenic < 0.58 && warfarin < 0.34))
{
	antibodies -= 0.03
}
	
	
//- If alcohol goes above 0.52, amanita_mushrooms dips below 0.69, and also deadly_nightshade dips below 0.59, increment antibodies by 0.05
if(alcohol > 0.52 && amanita_mushrooms < 0.69 && deadly_nightshade < 0.59)
{
	antibodies += 0.05
}
	
//- If alcohol dips below 0.75, or on the other hand, warfarin dips below 0.6 and amanita_mushrooms dips below 0.75, decrement ethanol by 0.04
if(alcohol < 0.75 || (warfarin < 0.6 & warfarin < 0.6 && amanita_mushrooms < 0.75))
{
	ethanol -= 0.04
}
	
//- If lead dips below 0.68, or on the other hand, formaldehyde goes above 0.69 and deadly_nightshade goes above 0.26, raise ethanol by 0.01
if(lead < 0.68 || (formaldehyde > 0.69 && deadly_nightshade > 0.26))
{
	ethanol += 0.01
}
	
//- When snakeVenom dips below 0.66 or alcohol goes above 0.54, or on the other hand, lead dips below 0.28 and amanita_mushrooms goes above 0.54, decrement paracetamol by 0.03
if((snakeVenom < 0.66 || alcohol > 0.54) || (lead < 0.28 && amanita_mushrooms > 0.54))
{
	paracetamol -= 0.03
}
	
//- When formaldehyde goes above 0.75 or arsenic dips below 0.72, or on the other hand, deadly_nightshade goes above 0.43 and warfarin goes above 0.47, increment paracetamol by 0.02
if(formaldehyde > 0.75 || arsenic < 0.72 || (deadly_nightshade > 0.43 && warfarin > 0.47))
{
	paracetamol += 0.02
}
	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	lead = nextValue(graphs[0],lead);
	deadly_nightshade = nextValue(graphs[1],deadly_nightshade);
	alcohol = nextValue(graphs[2],alcohol);
	amanita_mushrooms = nextValue(graphs[3],amanita_mushrooms);
	formaldehyde = nextValue(graphs[4],formaldehyde);
	arsenic = nextValue(graphs[5],arsenic);
	snakeVenom = nextValue(graphs[6],snakeVenom);
	warfarin = nextValue(graphs[7],warfarin);


	antivenom = constrain(antivenom, 0, 1);
	chalk = constrain(chalk, 0, 1);
	antibodies = constrain(antibodies, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
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
	text('deadly_nightshade: ' + nf(deadly_nightshade,1,2), 20,40);
	fill(colors[2]);
	text('alcohol: ' + nf(alcohol,1,2), 20,60);
	fill(colors[3]);
	text('amanita_mushrooms: ' + nf(amanita_mushrooms,1,2), 20,80);
	fill(colors[4]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,100);
	fill(colors[5]);
	text('arsenic: ' + nf(arsenic,1,2), 20,120);
	fill(colors[6]);
	text('snakeVenom: ' + nf(snakeVenom,1,2), 20,140);
	fill(colors[7]);
	text('warfarin: ' + nf(warfarin,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(antivenom,50,'antivenom');
	drawBar(chalk,200,'chalk');
	drawBar(antibodies,350,'antibodies');
	drawBar(ethanol,500,'ethanol');
	drawBar(paracetamol,650,'paracetamol');


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
