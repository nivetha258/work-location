	
let age = parseInt(prompt("Enter your age"));
let sex = prompt("Enter sex(male or female)");
if(sex == "male"){
	if(age > 20 && age <40){
		console.log("work in anywhere")
	}
	else if(age  >40 && age <60	)
	{
		console.log("work in urbanarea ")
	}
	else {
		console.log("error")
	}
}
else{
	console.log("u have alloted to work in urban area ")

}

