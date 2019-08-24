/*Creating randomNumber for random interval */
	var min=1; //min value;
	var max=10;  // max value
	var randomInterval = Math.floor(Math.random() * (+max - +min)) + +min;	//ceeat randomInterval by using random method 
	console.log("randomInterval:"+randomInterval +"s"); // print console the random number

/*Declare the events HAPPY , SAD, MOOD */
	let happy = new Event("HAPPY");
	let sad = new Event("SAD"); 
	let mood = new Event("MOOD"); 

/*for a function call a randomintervel*/
  setInterval(function(){ 
		execute(); // call the execute function
  }, randomInterval*1000);
 
/* for creating random number*/ 
  function randomCallFunction(){
	  var i  = Math.floor(Math.random()*20)%4; //creating a random number in between 0 to 4
	  if(i<=0) return randomCallFunction(); // if i get lessthan zero or equal zero call again same function
	  return i; //return the value of i ie:1 to 3
  }
  
/* for calling function randomely*/
  function execute(){
	var i = randomCallFunction(); //i will get the value from randomCallFunction function 
	eval('feeling'+i+'()'); // call the feeling function with add the value of i ie: 1 or 2 or 3
  }
   
/*for event dispach happy */ 
	function feeling1() {
		document.dispatchEvent(happy);
	}
/*for event dispach happy */
	function feeling2() {
		document.dispatchEvent(sad);
	}
/*for event dispach happy */
	function feeling3() {
		document.dispatchEvent(mood);
	}

/*for event tracking "HAPPY"*/ 
	 document.addEventListener("HAPPY", function(happy) { 
		console.log("HAPPY"); //console print 
	});
/*for event tracking "SAD"*/ 
	document.addEventListener("SAD", function(sad) { 
		console.log("SAD"); //console print
	});
/*for event tracking "MOOD"*/ 
	document.addEventListener("MOOD", function(sad) { 
		console.log("MOOD"); //console print
	});

