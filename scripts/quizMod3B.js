function processQuiz() 
{  
	var q1 = document.forms.quiz1.question1;   
	var score=0;
	
	if( q1[ 0 ].checked )  
	{   
		score = score + 1;
		} 
	
	var q2 = document.forms.quiz1.question2; 
	
	if( q2[ 1 ].checked )  
	{   
		score = score + 1;
	}
	
		var q3 = document.forms.quiz1.question3;   
		
		if( q3[ 1 ].checked )  
		{   
			score = score + 1;
			} 
		
		var q4 = document.forms.quiz1.question4;   
		
		if( q4[ 4 ].checked )  
		{   
			score = score + 1;
			} 
		alert("You got " + score + " correct! If you got all questions correct, move on to Module 4. If not, retake Module 3.");

	} 