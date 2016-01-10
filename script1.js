
var myVar = setInterval(myTimer, 1000);
var initialColor = '#'+Math.floor(Math.random()*16777215).toString(16);
$("#demo").css({backgroundColor: initialColor});
var backgroundColor = setInterval(backgroundColor, 300000);
var fontSize = setInterval(fontSize, 60000);
var nonArray = setInterval(nonArray, 1000);
var counter = 0;
var fs =["25px", "30px", "35px", "40px", "45px", "50px", "55px", "60px", "65px", "70px", "75px", "80px"];

// #1
function myTimer() {
    var today = new Date();
    // document.getElementById("demo").innerHTML = today.toLocaleTimeString();
 	$("#demo").html(today.toLocaleTimeString()); 
    var hours 	= today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    if ((minutes % 2)===0) {  
    $("#demo").css({color: "blue"});
	}else{
    $("#demo").css({color: "red"});
    }
 } 

// #2
function backgroundColor() {
    var today = new Date();
    // document.getElementById("demo").innerHTML = today.toLocaleTimeString();
 	$("#demo").html(today.toLocaleTimeString()); 
    var hours 	= today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
 
    if ((minutes % 2)===0) {  
    $("#demo").css({backgroundColor: randomColor});
	}else{
    $("#demo").css({backgroundColor: randomColor});
    }
}

// #3
function fontSize() {
 	size = fs[counter];
   	$("#demo").css({fontSize: size});
   	counter = counter + 1;
   	if (counter === fs.length + 1) {
   		counter = 0;
   	}
}

// #without having to do an array
// function nonArray() { 
//    	var randomNumber = Math.floor(Math.random() * 10) + 1;

//    	$("#demo").css({fontSize: counter + "px"});
//    	counter = counter + 1;
//    	if (counter === 1000) {
//    		counter = 0;
//    	}

// }

// uses var fs to call the array
 //    if (seconds ===1) {  
 //    $("#demo").css({fontSize: fs[0]});
	// }
	// if (seconds ===2) {  
 //    $("#demo").css({fontSize: fs[1]});
	// }
	// if (seconds ===3) {  
 //    $("#demo").css({fontSize: fs[2]});
	// }
	// if (seconds ===4) {  
 //    $("#demo").css({fontSize: fs[3]});
	// }
	// if (seconds ===5) {  
 //    $("#demo").css({fontSize: fs[4]});
	// }	
	// if (seconds ===6) {  
 //    $("#demo").css({fontSize: fs[5]});
	// }
	// if (seconds ===7) {  
 //    $("#demo").css({fontSize: fs[6]});
	// }	
	// if (seconds ===8) {  
 //    $("#demo").css({fontSize: fs[7]});
	// }	
	// if (seconds ===9) {  
 //    $("#demo").css({fontSize: fs[8]});
	// }
	// if (seconds ===10) {  
 //    $("#demo").css({fontSize: fs[9]});
	// }
	// if (seconds ===11) {  
 //    $("#demo").css({fontSize: fs[10]});
	// }
	// if (seconds ===12) {  
 //    $("#demo").css({fontSize: fs[11]});
	// }		



