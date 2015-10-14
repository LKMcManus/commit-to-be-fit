
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "Your goal should be clear and easy to understand.";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "A goal to “lose weight” is not enough. Making your goal measurable means adding a number.";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "Before you can add a number, you have to know how high or low you want to go.";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "Set goals that are important to where you are in your life right now.";
	}
	else if( number == 5 )
	{
		document.getElementById( "output-text" ).innerHTML = "Include an end-point. Knowing that you have a deadline motivates you to get started.";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}