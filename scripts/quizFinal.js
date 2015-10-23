function processQuiz() 
{  
	var q1 = document.forms.quiz1.question1;   
	var score=0;
	
	if( q1[ 0 ].checked )  
	{   
		score = score + 1;
		} 
	
	var q2 = document.forms.quiz1.question2; 
	
	if( q2[ 2 ].checked )  
	{   
		score = score + 1;
	}
	
		var q3 = document.forms.quiz1.question3;   
		
		if( q3[ 1 ].checked )  
		{   
			score = score + 1;
			} 
		
var q4 = document.forms.quiz1.question4;   
		
		if( q4[ 1 ].checked )  
		{   
			score = score + 1;
			} 
		
var q5 = document.forms.quiz1.question5;   
		
		if( q5[ 0 ].checked )  
		{   
			score = score + 1;
			} 
		
var q6 = document.forms.quiz1.question6;   
		
		if( q6[ 0 ].checked )  
		{   
			score = score + 1;
			} 
		
		
var q7 = document.forms.quiz1.question7;   
		
		if( q7[ 1 ].checked )  
		{   
			score = score + 1;
			} 
		
		
var q8 = document.forms.quiz1.question8;   
		
		if( q8[ 1 ].checked )  
		{   
			score = score + 1;
			} 
		
var q9 = document.forms.quiz1.question9;   
		
		if( q9[ 0 ].checked )  
		{   
			score = score + 1;
			} 
		
var q10 = document.forms.quiz1.question10;   
		
		if( q10[ 0 ].checked )  
		{   
			score = score + 1;
			} 
		alert("You got " + score + " correct!");
	} 