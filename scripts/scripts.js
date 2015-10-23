// this file holds any scripts that have to do with communicating with the learning management system (LMS)

// define a SCORM object to interface with LMS
var oScorm = pipwerks.SCORM;  

// This function starts the course.  This function should be called first to ensure that
// all session variables are created
function startCourse()
{
	// check to see if cookies is enabled, otherwise, this won't work
	if( typeof sessionStorage == "undefined" || sessionStorage.disabled )
	{
		alert( "You must enable cookies for this course to work properly." );
	}
	else
	{
		// if it is enabled, checked to see if this course was started
		// if it was not able to retrieve, the key "course_started", then
		// then this is the first time we are running the course
        if( !sessionStorage.getItem( "course_started" ) )
        {
        	// clear the session storage
            sessionStorage.clear();
            // set the "key" by giving it a value.  all values are strings!
            // course_started indicated that this OLM has started
    		sessionStorage.setItem( "course_started", "1" );
    			
			// set the values you want to persist throughout the website here
        }
	}
	
	// initializeSCORM after the OLM environment has been set up
	initializeSCORM();
}

// This function initializes the course by connecting the course to the LMS 
// The SCORM connection is done once at the beginning of the course
// Another function, reportScores(), will connect again when the 
// user is done with the online learning module
function initializeSCORM()
{
	var lmsConnected = oScorm.init();
	
	// we only want to run initializeSCORM once, so use course_started
	// to keep track of how many times we have initialized 
	var getStarted = sessionStorage.getItem( "course_started" );
	
	// only do the following if we are connected to the LMS and
	// if course_started has a value of 1
	if( lmsConnected && getStarted == "1" )
	{
        // always set the status to incomplete
		oScorm.set( "cmi.success_status", "unknown" );
		oScorm.set( "cmi.lesson_status", "incomplete" );
		oScorm.set( "cmi.completion_status", "incomplete" );
		
		// change course_started to another value so that this initializeSCORM
		// does not run the initialization code again; otherwise, this OLM
		// will be incomplete if the user goes back to the first page even after
		// passing the exam 
		sessionStorage.setItem( "course_started", "2" );
    		
		// retrieve the LMS values (like user name) here and 
		// integrate them into your course
	}
}

// This function reports the score from the assessment to the LMS
// This should only be called when the user submits the answers to the quiz
function reportScores()
{	
	oScorm.save();
}

// This function is called when the window is closed.  It saves and quits the course.
function finishCourse()
{
	oScorm.save();
	oScorm.quit();
}

function visitModule1Page1()
{
	sessionStorage.setItem("module1page1", "visited");
	checkVisitsModule1();
}

function visitModule1Page2()
{
	sessionStorage.setItem("module1page2", "visited");
	checkVisitsModule1();
}

function visitModule1Page3()
{
	sessionStorage.setItem("module1page3", "visited");
	checkVisitsModule1();
}

function visitModule1Page4()
{
	sessionStorage.setItem("module1page4", "visited");
	checkVisitsModule1();
}

function checkVisitsModule1()
{
	
	var mod1value2 = sessionStorage.getItem ("module1page2");
	var mod1value3 = sessionStorage.getItem ("module1page3");
	var mod1value4 = sessionStorage.getItem ("module1page4");

	var module1 = "no";
	
	if( mod1value2=="visited" && mod1value3=="visited"  && mod1value4=="visited")
	{
	document.getElementById( "content-frame" ).contentWindow.document.getElementById( "quiz-link" ).style.display = "inline";
	module1 = "visited";
	}
	
}



function visitModule2Page1()
{
	sessionStorage.setItem("module2page1", "visited");
	checkVisitsModule2();
}

function visitModule2Page2()
{
	sessionStorage.setItem("module2page2", "visited");
	checkVisitsModule2();
}

function visitModule2Page3()
{
	sessionStorage.setItem("module2page3", "visited");
	checkVisitsModule2();
}

function visitModule2Page4()
{
	sessionStorage.setItem("module2page4", "visited");
	checkVisitsModule2();
}

function checkVisitsModule2()
{
	
	var mod2value2 = sessionStorage.getItem ("module2page2");
	var mod2value3 = sessionStorage.getItem ("module2page3");
	var mod2value4 = sessionStorage.getItem ("module2page4");

	var module2 = "no";
	
	if( mod2value2=="visited" && mod2value3=="visited"  && mod2value4=="visited")
	{
	document.getElementById( "content-frame" ).contentWindow.document.getElementById( "quiz-link" ).style.display = "inline";
	module2 = "visited";
	}
	
}

function visitModule3Page1()
{
	sessionStorage.setItem("module3page1", "visited");
	checkVisitsModule3();
}

function visitModule3Page2()
{
	sessionStorage.setItem("module3page2", "visited");
	checkVisitsModule3();
}

function visitModule3Page3()
{
	sessionStorage.setItem("module3page3", "visited");
	checkVisitsModule3();
}

function visitModule3Page4()
{
	sessionStorage.setItem("module2page4", "visited");
	checkVisitsModule3();
}

function checkVisitsModule3()
{
	
	var mod3value2 = sessionStorage.getItem ("module3page2");
	var mod3value3 = sessionStorage.getItem ("module3page3");
	var mod3value4 = sessionStorage.getItem ("module3page4");

	var module3 = "no";
	
	if( mod3value2=="visited" && mod3value3=="visited"  && mod3value4=="visited")
	{
	document.getElementById( "content-frame" ).contentWindow.document.getElementById( "quiz-link" ).style.display = "inline";
	module2 = "visited";
	}
	
}
