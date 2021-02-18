var mail;
var pass;
myfunc = () => {
	mail =  document.getElementById("email").value;
	pass =  document.getElementById("pass").value;

	if (mail == ""){
		alert("Please enter Email")
	}else if (pass == "") {
		alert("Please enter password")
	}
	else{
		console.log(mail,pass)
		window.location.href = "page1.html";
	}
	
	// console.log(mail)
}

console.log(mail)