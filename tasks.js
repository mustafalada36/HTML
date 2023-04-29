	// Q1
	// let a =prompt("Enter First Integer" );
	//  // a =parseFloat(a);	
	// let b=prompt("Enter Second Integer" );
	//  // b =parseFloat(b);
	// const c = prompt("Multiplication is:",a*b) ;
	// const d = prompt("Division is:",a/b);




	// Q2
 	// function sumandtriple(num1,num2){
 	// 	var sum = num1+num2;
 	// 	if(num1 === num2){
 	// 		sum *=3;
 	// 	}
 	// 	document.write("Sum = " + sum);
 	//  };
 	//  sumandtriple(4,4)();
 	



	// Q3
	// const par = document.getElementById("para");
	// par.style.backgroundColor = "Yellow";
  
 	 

 	//Q4
 	function getnames(){
		
 		const firstname = document.getnamebyId("FirstName").value;
 		const lastname  = document.getnamebyId("LastName ").value;

 		return(firstname,lastname);
 		const form = "myform" ;
	 	form.addEventListener("submit", function(event) {
	  	event.preventDefault();
	  	const names = getnames();
	  	console.log(names.firstname,names.lastname);
	  	});
 	}
 	//call the function through action listener
 	