$(document).ready(function() {
		 
		$("#answer1").hide();
		$("#lastpage").hide();
		$("#next1").hide();
		$("#result").hide();
		$("#section1").hide();
		$("#endit").hide();

		// $(".question").hide();
		//function(assign());
	// });
});

//Declare a global variable for total number of questions given by the user
var tCounter;

//Declare a global variable for current question number of questions given by the user
var qCounter;

//Declare a global variable for number of correct answers given by the user
var cCounter;

//Declare a global variable for random x and y.
var x,y;

//Declare a global variable for a random operator of +, -, * or /
var oper; 

$(document).ready(function(){
  $("#start").click(function(){
    tCounter=parseInt(document.getElementById('tQuestion').value);

	if (tCounter < 5){
		alert("You need to have at least 5 questions."); 
		return;
	}
    cCounter=0 //A Counter for number of correct answers.
    qCounter=1 //A counter for the current question number
    startup();
  });
  $("#result1").click(function(){
  	CheckAnswer();
  });
  $("#next1").click(function(){
  	NextQuestion();
  });
});

function startup() {

	$("#question1").show();
	$("#next1").hide();
	$("#answer1").hide();
	setTimeout(function() {
		$("#result1").show();
     }, 3000);

	x = Math.floor((Math.random()*10)+1); 
	y = Math.floor((Math.random()*10)+1);
	var TempOper = Math.floor((Math.random()*3));
		if (TempOper==0){
			oper="+";
		}
		if (TempOper==1){
			oper="-";
		}		
		if (TempOper==2){
			oper="*";
		}		
		// if (TempOper==3){
		// 	oper="/";
		// }
	document.getElementById("qNum").innerHTML=qCounter;
	document.getElementById("qQues").innerHTML=x+oper+y;	
	$("#section1").fadeIn(2000);

};

function CheckAnswer() {
		$("#result1").hide();
		$("#next1").show();
		$("#answer1").show();
		var z = eval (x+oper+y);
		var uAnswer = parseInt(document.getElementById('uAnswer').value);
		if (uAnswer==z) {
				document.getElementById("answer1").innerHTML='You have the correct answer!';
				cCounter=cCounter+1;
		}
		else{
				document.getElementById("answer1").innerHTML='That is why you fail! The correct answer is '+ z +'.';	
		};
		qCounter=qCounter+1;
//		$("#question1").hide();
		document.getElementById("n1").innerHTML='Next Question';	
};

function NextQuestion(){
	document.getElementById('uAnswer').value= '';
	$("#section1").fadeOut(2000); //Wait until the fade out until this executes the following lines.
	
	if (qCounter > tCounter) {
		document.getElementById("result").innerHTML='Congratulations for finishing the quiz! Your result is '+ cCounter +' out of '+tCounter+' questions.';
		$("#result").show();
		$("#lastpage").show();
		$("#endit").show();
	}
else

	setTimeout(function() {
			startup();
     }, 3000);
};

$(document).ready(function(){
  $("#result1").click(function(){
    $("#answer1").fadeIn(2000);
  });
});


// $(document).ready(function(){
//     $('#hide'.click(function() {
//         $('#answer1').fadeOut('fast');
//     });
//  });



// var cCounter = 0;

// function assign(x,y,z){
// 	for (var i = 1, i < 6; i++){
// 		var xArray[i] = Math.floor((Math.random()*10)+1); 
// 		var yArray[i] = Math.floor((Math.random()*10)+1);
// 		var zArray[i] = [xArray[i]+yArray];
// 		document.write(xArray[i], yArray[i], zArray[i]);
// 		//check the code that would write in q[i]: What is xArray[i] + yArray[i] = ?
// 		//check the code that would write in a[i]: The correct answer is zArray[i].
// 		return xArray[i], yArray[i], zArray[i]; //given the above two lines, may only have to return zArray[i]
// 	}
// }
// for (var i = 1, i < 6, i++){
// 	var uAnswer[i] = input "uAnswer" //from form. 
// 	call function check("uAnswer");
// 	var cCounter = cCounter+1;
// }

// function check(uAnswer)
// {
// 	if (zArray[i] = uAnswer)
// 		then (document.write("You are correct!"); //highlight this as green
// 			cCounter = cCounter + 1;	
// 			)	else (document.write("Sorry. The correct answer is: "+zArray[i]"."); //highlight this as red
// 			)
// 	return cCounter;
// }

// //This will be used to forward to the closing page and display the results of the test.

// $(document).ready(function){
// 	("#endButton").click(){
// 		function open_win(){
// 			window.open("end.html");
// 			//write to the "#score.end.html" area the score that the person received out of 5.
// 		});
// });

// }