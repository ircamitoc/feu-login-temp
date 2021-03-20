function validate(){
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	if(username=="admin" && password=="user1234"){
		alert("Login successful!");
		return true;
	}
	else if(username == "" || password == ""){
		alert("Please enter your username/password correctly.");
	}
	else{
		alert("Login failed. Please try again.");
	}

}